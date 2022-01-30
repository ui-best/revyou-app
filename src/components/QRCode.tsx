import { Image, Box, Text } from "@chakra-ui/react";
import QRCodeStyling from "qr-code-styling";
import { useCallback, useEffect, useRef } from "react";
import TestImg from "../assets/test.png";
import LogoImg from "../assets/logo.png";

const QRCode = ({ data, icon }: { data: string; icon?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const generate = useCallback(() => {
    const qrCode = new QRCodeStyling({
      data: "https://revyou.digital/feed/concordia-demo",
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
  }, [data, icon]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <Box w={300} mx="auto">
      <Image src={LogoImg} h="100%" />
      <Text fontWeight="bold" fontFamily="Poppins" fontSize={20} textAlign="center" px={5} mb={3}>
        www.revyou.digital
      </Text>
      <div ref={ref} />
      <Text fontWeight="bold" fontFamily="Poppins" fontSize={17} textAlign="center" p={5}>
        Scan QR with your camera or visit revyou.digital to view videos.
      </Text>
    </Box>
  );
};

export default QRCode;
