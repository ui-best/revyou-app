import { Badge, Box } from "@chakra-ui/react";
import { useRef } from "react";
import Rating from "react-rating";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const Post = ({ user, video, rating, pinned }: any) => {
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
      {pinned && (
        <Badge pos="fixed" top={6} left={6}>
          Pinned
        </Badge>
      )}
      <video ref={videoRef} src={"https://api.revyou.digital/video/" + video} autoPlay muted loop playsInline onClick={toggle} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

      {!!rating && (
        <Box pos="absolute" bottom="150px" left={5}>
          <Rating initialRating={rating} readonly emptySymbol={<StarIcon width={25} height={25} color="#5e5e5e" />} fullSymbol={<StarIcon width={25} height={25} color="#ffffff" />} />
        </Box>
      )}
    </Box>
  );
};

export default Post;
