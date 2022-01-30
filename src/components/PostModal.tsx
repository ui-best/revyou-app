import { Image, Modal, ModalOverlay, ModalContent, Text, Stack, Button, Progress } from "@chakra-ui/react";
import { useState } from "react";
import PostService from "../services/post-service";
import Rating from "react-rating";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import { useParams } from "react-router";

let interval: NodeJS.Timer;

const PostModal = ({ file, open, onClose }: { file: any; open: boolean; onClose: () => void }) => {
  const { id } = useParams();
  const [rating, setRating] = useState<number | undefined>();
  const [rated, setRated] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [succeeded, setSucceeded] = useState(false);

  const finish = () => {
    clearInterval(interval);
    setUploading(false);
    setProgress(0);
    clearInterval(interval);
    setRating(undefined);
    setSucceeded(false);
    onClose();
  };

  const upload = async () => {
    setUploading(true);

    interval = setInterval(() => {
      setProgress(PostService.progress);
      if (progress >= 100) {
        finish();
      }
    }, 500);

    try {
      if (file) {
        await PostService.upload(id!, file, rating);
      }
      setSucceeded(true);
    } catch (err) {
      clearInterval();
    }
  };

  const RatingContent = () => {
    return (
      <Stack pt="100px" h="100%" align="center" justify="center" spacing={10}>
        <Text fontFamily="Poppins" fontSize={23} fontWeight="bold">
          Leave a rating?
        </Text>
        <Rating onChange={(value) => setRating(value)} emptySymbol={<StarIcon width={50} height={50} color="#ccc" />} fullSymbol={<StarIcon width={50} height={50} color="#1350ff" />} />
        <Button
          onClick={() => {
            upload();
            setRated(true);
          }}
        >
          Continue
        </Button>
      </Stack>
    );
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

  const SuccessContent = () => {
    return (
      <>
        <Image mx="auto" mt={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" w="150px" h="150px" />
        <Button mt={10} w={100} mx="auto" onClick={finish}>
          OK
        </Button>
      </>
    );
  };

  return (
    <Modal isOpen={open} onClose={finish} isCentered>
      <ModalOverlay />
      <ModalContent minH={400} m={5} rounded="2xl">
        {!rated ? RatingContent() : succeeded ? SuccessContent() : uploading ? UploadingContent() : null}
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
