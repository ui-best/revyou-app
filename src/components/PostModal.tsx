import { Modal, ModalOverlay, ModalContent, Text, Stack, Progress } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import PostService from "../services/post-service";

const PostModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (open) {
      inputRef.current!.click();
    }
  }, [open]);

  const upload = async () => {
    setUploading(true);
    let file = inputRef.current?.files?.[0];

    const interval = setInterval(() => {
      setProgress(PostService.progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        setProgress(0);
        onClose();
      }
    }, 500);

    try {
      if (file) {
        await PostService.upload(file, null);
      }
    } catch (err) {
      clearInterval(interval);
    }
  };

  const UploadingContent = () => {
    return (
      <Stack flex={1} align="center" justify="center" p={8} spacing={5}>
        <Progress w="100%" value={progress} min={20} max={100} size="lg" colorScheme="blue" />
        <Text fontFamily="Poppins" fontWeight="bold" fontSize={18}>
          Uploading...
        </Text>
      </Stack>
    );
  };

  return (
    <>
      <Modal isOpen={uploading} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minH={400} m={5} rounded="2xl">
          {uploading ? UploadingContent() : null}
        </ModalContent>
      </Modal>

      <input ref={inputRef} type="file" capture="environment" accept="video/*" onChange={upload} style={{ display: "none" }} />
    </>
  );
};

export default PostModal;
