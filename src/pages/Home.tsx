import { Box, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import createScrollSnap from "scroll-snap";
import BottomBar from "../components/BottomBar";
import LocationCard from "../components/LocationCard";

const Home = () => {
  const [items, setItems] = useState([
    { name: "hi", color: "blue" },
    { name: "hi", color: "blue" },
    { name: "hello", color: "red" },
  ]);
  // const size = useWindowSize();

  const loadMore = useCallback(() => {
    let newItems = [];
    if (window.scrollY < window.innerHeight / 2) {
      newItems = [{ name: "loaded", color: getRandomColor() }, ...items];
      newItems.pop();
    } else {
      newItems = [...items, { name: "loaded", color: getRandomColor() }];
      newItems.shift();
    }
    console.log(newItems);
    setItems(newItems);
    window.scrollTo(0, window.innerHeight);
  }, [items]);

  useEffect(() => {
    window.scrollTo(0, window.innerHeight);
    const { bind, unbind } = createScrollSnap(
      document.documentElement,
      {
        threshold: 0.05,
        duration: 300,
        timeout: 1,
        snapStop: true,
        snapDestinationY: "100%",
      },
      () => {
        loadMore();
      }
    );
    return () => {
      unbind();
    };
  }, [loadMore]);

  return (
    <Container overflowY="scroll" maxW="full" p={0}>
      {items.map((item, i) => (
        <Box key={item.name + i} h="100vh" bg={item.color} />
      ))}

      <Box pos="fixed" bottom="70px" left="10px">
        <LocationCard />
      </Box>

      <BottomBar />
    </Container>
  );
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Home;
