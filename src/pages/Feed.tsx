import { Container, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Feed = () => {
  const { id } = useParams();

  return (
    <Container>
      <Text>{id}</Text>
    </Container>
  );
};

export default Feed;
