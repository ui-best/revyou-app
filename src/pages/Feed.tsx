import { Text, Image, Box, Container } from "@chakra-ui/react";
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
    <Container maxW="full" p={0} bg="#000" minH="100vh">
      <Container maxW={600} p={0}>
        <Image pos="fixed" top={5} left="50%" transform="translateX(-50%)" src={LogoImg} w="100px" filter="brightness(0) invert(1)" zIndex={1000} />

        {!!items.length ? (
          items.length <= 1 ? (
            <Post key={items[0]?.name} video={items[0]?.video || ""} rating={items[0]?.rating} pinned={items[0]?.pinned} />
          ) : (
            <ReactPageScroller containerWidth="100%" animationTimer={500}>
              {items.map((item, i) => (
                <Post key={item.name + i} video={item.video || ""} rating={item.rating} pinned={item.pinned} />
              ))}
            </ReactPageScroller>
          )
        ) : (
          <Text pos="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" fontFamily="Poppins" fontSize={23} whiteSpace="nowrap">
            {!place ? "This place doesn't exist!" : "This place is empty :("}
          </Text>
        )}
        {place && (
          <Box pos="fixed" bottom="70px" left={{ base: 2, lg: "15%" }}>
            <LocationCard data={place} />
          </Box>
        )}
      </Container>
      <BottomBar />
    </Container>
  );
};

export default Feed;
