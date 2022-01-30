import { Modal, ModalOverlay, ModalContent, Box, Image, Text, Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import PlaceService from "../services/place-service";
import QRCode from "./QRCode";

const CreatePlaceModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [qrUrl, setQRUrl] = useState("");

  const create = async () => {
    try {
      const { url } = await PlaceService.add(name, address, city, postalCode);
      setQRUrl(url);
    } catch (err) {}
  };

  const close = () => {
    setName("");
    setAddress("");
    setCity("");
    setPostalCode("");
    setQRUrl("");
    onClose();
  };

  const FormContent = () => {
    return (
      <>
        <Image src="https://icons.veryicon.com/png/o/application/wechat/qr-code-76.png" w="100px" h="100px" />
        <Text mt={3} textAlign="center" fontSize={22} fontWeight="bold" color="blue.600">
          Create a Place
        </Text>
        <Text textAlign="center" opacity={0.8}>
          Please fill out the following form to create your customized QR code.
        </Text>
        <Stack my={8} align="center" spacing={3} fontFamily="Poppins">
          <Input variant="filled" placeholder="Name" autoFocus={false} value={name} onChange={(e) => setName(e.target.value)} />
          <Input variant="filled" placeholder="Address" autoFocus={false} value={address} onChange={(e) => setAddress(e.target.value)} />
          <Input variant="filled" placeholder="City" autoFocus={false} value={city} onChange={(e) => setCity(e.target.value)} />
          <Input variant="filled" placeholder="Zip/Postal Code" autoFocus={false} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </Stack>
        <Button w={200} bg="#1350ff" color="#fff" fontWeight="normal" rounded="xl" onClick={create}>
          Create
        </Button>
      </>
    );
  };

  const QRContent = () => {
    return (
      <>
        <QRCode data={qrUrl} />

        <Stack align="center" spacing={4}>
          <Button w={200} bg="#1350ff" color="#fff" fontWeight="normal" rounded="lg" onClick={() => alert("Coming soon!")}>
            Print
          </Button>
          <Button w={200} bg="#1350ff" color="#fff" fontWeight="normal" rounded="lg" onClick={() => alert("Coming soon!")}>
            Share
          </Button>
          <Button w={200} bg="#eee" color="#222" fontWeight="normal" rounded="lg" onClick={close}>
            Finish
          </Button>
        </Stack>
      </>
    );
  };

  return (
    <Modal isOpen={open} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent m={2}>
        <Box align="center" maxW="md" shadow="lg" rounded="xl" mx="auto" py="80px" px={12} spacing={3} fontFamily="Poppins" bg="#fff" zIndex={10}>
          {!!qrUrl ? QRContent() : FormContent()}
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default CreatePlaceModal;
