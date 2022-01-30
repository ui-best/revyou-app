import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const LocationCard = ({ data, large, onClick }: { data: any; large?: boolean; onClick?: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack
      w={large || expanded ? "250px" : "145px"}
      h={large || expanded ? "80px" : "70px"}
      shadow="xl"
      bg="#fff"
      rounded="xl"
      p={3}
      spacing={2}
      transition="0.3s ease-in-out"
      onClick={() => {
        setExpanded(!expanded);
        onClick?.();
      }}
      cursor={!!onClick ? "pointer" : undefined}
    >
      <Stack direction="row" spacing={2}>
        <Stack w="145px" spacing={2}>
          <Stack direction="row" align="center" spacing={3}>
            <Image w={30} h={30} src={data.iconData} />
            <Text fontFamily="Poppins" fontSize={13} lineHeight={1}>
              {data?.name || "--"}
            </Text>
          </Stack>
          <Stack fontFamily="Poppins" lineHeight={1} opacity={0.8} textAlign="center">
            <Text opacity={large || expanded ? 1 : 0} fontSize={12} h={large || expanded ? "7px" : 0} transition="0.5s ease-in-out">
              {data?.address || "--"}
            </Text>
            <Text fontSize={10} transform={`translateY(${large || expanded ? "0px" : "-9px"})`} transition="0.5s ease-in-out">
              {data?.city || "--"}, {data?.postalCode || "--"}
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row" opacity={expanded ? 1 : 0} transition="300ms ease-in-out">
          <Image src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" w={25} h={25} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" w={25} h={25} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LocationCard;
