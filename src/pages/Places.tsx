import { Text, Box, Container, Divider } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BottomBar from "../components/BottomBar";
import LocationCard from "../components/LocationCard";
import PlaceService from "../services/place-service";

const Places = () => {
  const [suggested, setSuggested] = useState<any[]>([]);
  const navigate = useNavigate();

  const load = useCallback(async () => {
    const sugg = await PlaceService.getSuggested();
    setSuggested(sugg);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Container maxW="full" p={0}>
      <Box p={7} align="center">
        <Text fontFamily="Poppins" fontSize={32} letterSpacing={0} fontWeight="bold">
          Places
        </Text>

        <Text mt={8} fontFamily="Poppins" fontSize={23} letterSpacing={0} fontWeight="600" opacity={0.8}>
          Featured
        </Text>
        {suggested.map((data) => (
          <Box key={data.id} my={5}>
            <LocationCard data={data} large onClick={() => navigate(`/feed/${data.id}`)} />
          </Box>
        ))}
        <Divider my={10} />
        <Text fontFamily="Poppins" fontSize={23} letterSpacing={0} fontWeight="600" opacity={0.8}>
          Recent
        </Text>

        <Text fontFamily="Poppins" fontSize={18}>
          No Recent Places
        </Text>
      </Box>

      <BottomBar />
    </Container>
  );
};

export default Places;
