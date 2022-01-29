import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const LocationCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack w={expanded ? "250px" : "145px"} h={expanded ? "90px" : "70px"} shadow="xl" bg="#fff" rounded="xl" p={3} spacing={2} transition="0.5s ease-in-out" onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <Stack direction="row" spacing={2}>
        <Stack w="145px" spacing={2}>
          <Stack direction="row" align="center" spacing={3}>
            <Image w={30} h={30} src="https://www.concordia.ca/content/concordia/en/social/guidelines-conduct.img.png/1631757076138.png" />
            <Text fontFamily="Poppins" fontSize={13} lineHeight={1}>
              Concordia University
            </Text>
          </Stack>
          <Stack fontFamily="Poppins" lineHeight={1} opacity={0.8} textAlign="center">
            <Text opacity={expanded ? 1 : 0} fontSize={12} h={expanded ? "7px" : 0} transition="0.5s ease-in-out">
              111 rue Johnson
            </Text>
            <Text fontSize={10} transform={`translateY(${expanded ? "0px" : "-9px"})`} transition="0.5s ease-in-out">
              Pierrefonds, QC
            </Text>
          </Stack>
        </Stack>
        <Box></Box>
      </Stack>
    </Stack>
  );
};

export default LocationCard;
