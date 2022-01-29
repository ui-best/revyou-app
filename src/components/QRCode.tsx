import { Box, Text } from "@chakra-ui/react";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";
import TestImg from "../assets/test.png";

const QRCode = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    const qrCode = new QRCodeStyling({
      data: "https://qreview.com/feed/12345678910",
      width: 300,
      height: 300,
      type: "svg",
      image: TestImg,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 2,
        imageSize: 0.5,
      },
    });

    qrCode.append(ref.current!);
  };

  return (
    <Box w={300}>
      <Text fontWeight="bold" fontFamily="Poppins" fontSize={20} textAlign="center" p={5}>
        qreview.com
      </Text>
      <div ref={ref} />
      <Text fontWeight="bold" fontFamily="Poppins" fontSize={17} textAlign="center" p={5}>
        Scan QR with your camera or visit qreview.com to view videos.
      </Text>
    </Box>
  );
};

export default QRCode;
