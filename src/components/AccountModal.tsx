import { Modal, ModalOverlay, ModalContent, Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as ScanIcon } from "../assets/icons/scan.svg";
import CreatePlaceModal from "./CreatePlaceModal";

const AccountModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [showPlaceModal, setShowPlaceModal] = useState(false);

  return (
    <>
      <Modal isOpen={open} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m={2} align="center" minH={400} w="100%" maxW="md" shadow="lg" mx="auto" py="80px" borderRadius="20px" overflow="hidden" px={12} spacing={3} fontFamily="Poppins">
          <Text fontFamily="Poppins" fontSize={22} letterSpacing={0} fontWeight="bold">
            Create your QR Code
          </Text>
          <Button
            mt={10}
            rounded="md"
            shadow="lg"
            bg="#1350ff"
            color="#fff"
            leftIcon={<ScanIcon width={25} height={25} />}
            onClick={() => {
              setShowPlaceModal(true);
              onClose();
            }}
            fontSize={18}
            px={5}
            py={7}
            zIndex={10}
          >
            <Text ml={2}>Continue</Text>
          </Button>
        </ModalContent>
      </Modal>

      <CreatePlaceModal open={showPlaceModal} onClose={() => setShowPlaceModal(false)} />
    </>
  );
};

export default AccountModal;
