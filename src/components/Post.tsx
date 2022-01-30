import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import Rating from "react-rating";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const Post = ({ user, video, rating }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (videoRef.current!.paused) {
      videoRef.current!.play();
    } else {
      videoRef.current!.pause();
    }
  };

  return (
    <Box pos="relative" w="100%" h="100%">
      <video ref={videoRef} src={"http://10.0.0.113:8080/video/" + video} autoPlay muted loop playsInline onClick={toggle} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

      {!!rating && (
        <Box pos="absolute" bottom="150px" left={5}>
          <Rating initialRating={rating} readonly emptySymbol={<StarIcon width={25} height={25} color="#5e5e5e" />} fullSymbol={<StarIcon width={25} height={25} color="#ffffff" />} />
        </Box>
      )}
    </Box>
  );
};

export default Post;
