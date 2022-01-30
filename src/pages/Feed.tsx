import { Image, Box, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import LocationCard from "../components/LocationCard";
import { useParams } from "react-router";
import PostService from "../services/post-service";
import Post from "../components/Post";
import LogoImg from "../assets/logo.png";
import PlaceService from "../services/place-service";
import ReactPageScroller from "react-page-scroller";

const Feed = () => {
  const { id } = useParams();
  const [place, setPlace] = useState<any>();
  const [items, setItems] = useState<any[]>([]);

  const load = useCallback(async () => {
    if (!id) {
      return;
    }
    const place = await PlaceService.get(id);
    setPlace(place);
    const posts = await PostService.getForPlace(id);
    setItems(posts);
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Container maxW="full" p={0} bg="#000">
      <Container maxW={600} p={0}>
        <Image pos="fixed" top={5} left="50%" transform="translateX(-50%)" src={LogoImg} w="100px" filter="brightness(0) invert(1)" zIndex={1000} />

        {!!items.length && (
          <ReactPageScroller containerWidth="100%" animationTimer={500}>
            {items.map((item, i) => (
              <Post key={item.name + i} video={item.video || ""} rating={item.rating} />
            ))}
          </ReactPageScroller>
        )}
        <Box pos="fixed" bottom="70px" left="10px">
          <LocationCard data={place} />
        </Box>
      </Container>
      <BottomBar />
    </Container>
  );
};

export default Feed;
