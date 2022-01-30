import { useCallback, useEffect, useRef, useState } from "react";
import QRScanner from "qr-scanner";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon, AlertTitle, Box, CloseButton, Image, Text } from "@chakra-ui/react";
import ScanGraphic from "../assets/qr-scanner-graphic.png";

const Scanner = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const ref = useRef<HTMLVideoElement>(null);

  const load = useCallback(async () => {
    const qrScanner = new QRScanner(ref.current!, (result) => {
      if (!result.startsWith("https://revyou.digital/feed/")) {
        setErrorMsg("Scanned an invalid code!");
        return;
      }
      const code = result.replace("https://revyou.digital/feed/", "");
      navigate(`/feed/${code}`);
    });
    await qrScanner.start();
    setLoaded(true);
  }, [navigate]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Box w="100%" h="100%">
      <Image pos="fixed" top={150} left="50%" transform="translateX(-50%)" src={ScanGraphic} w="220px" h="220px" zIndex={20} />
      <Box pos="fixed" top={0} w="100%" h="100%" bg="#000" opacity={0.3} zIndex={10} />
      <video ref={ref} style={{ width: "100%", height: "100vh", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "0.5s ease-in-out" }} />
      <Alert pos="fixed" w={300} rounded="lg" left="50%" transform="translateX(-50%)" bottom="12%" status="error" zIndex={30} opacity={!!errorMsg ? 1 : 0} transition="0.5s ease-in-out">
        <AlertIcon />
        <AlertTitle mr={2}>{errorMsg}</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <Text pos="fixed" w="100%" bottom="5%" textAlign="center" zIndex={20} fontFamily="Poppins" color="#fff">
        Aim your camera at the QR code
      </Text>
    </Box>
  );
};

export default Scanner;
