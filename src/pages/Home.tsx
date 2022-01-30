import { Box, Button, Stack, SimpleGrid, Container, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeroGraphic from "../assets/phone-hero.png";
import HeroVideo from "../assets/hero-video.mp4";
import { ReactComponent as ScanIcon } from "../assets/icons/scan.svg";
import CreatePlaceModal from "../components/CreatePlaceModal";
import { useState } from "react";
import DevpostLogo from "../assets/devpost.png";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import EiffelTowerImg from "../assets/eiffel.png";

const Home = () => {
  const navigate = useNavigate();
  const [showPlaceModal, setShowPlaceModal] = useState(false);

  return (
    <Container maxW="full" p={0}>
      <Stack direction="row" justify="space-between" py={3} px={5}>
        <Text color="blue.800" p={5} fontSize={18}>
          RevYOU
        </Text>
        <Button mt={10} rounded="md" shadow="lg" bg="#1350ff" color="#fff" fontSize={16} px={9} py={5}>
          Sign in
        </Button>
      </Stack>
      <Box pos="relative" w="100%" h="70vh" fontFamily="Poppins">
        <SimpleGrid maxW="7xl" columns={{ base: 1, lg: 2 }} h="80%" align="center" mx="auto">
          <Box my="50px" textAlign="left" px={{ base: 5, lg: 20 }}>
            <Text mt={10} mb={5} color="#1350ff" fontSize={17} lineHeight={1} fontWeight="600" letterSpacing={0} whiteSpace="nowrap">
              <Image src={DevpostLogo} w="25px" display="inline" mr={2} verticalAlign="middle" />
              <Text mr={3} display="inline">
                Check out our project on Devpost
              </Text>
              <ArrowRightIcon width="18px" style={{ display: "inline", verticalAlign: "middle" }} />
            </Text>
            <Text fontSize={{ base: "40px", lg: "54px" }} color="#000" w="100%" lineHeight={1.4} fontWeight="500" letterSpacing="-2.5px">
              Join our interactive experience sharing platform
            </Text>
            <Text mt={8} fontSize={16} color="blue.800">
              With an innovative and entertaining way to engage your audience with short videos while bringing people and businesses closer together
            </Text>

            <Button mt={10} rounded="md" shadow="lg" bg="#1350ff" color="#fff" leftIcon={<ScanIcon width={25} height={25} />} onClick={() => navigate("/scan")} fontSize={18} px={16} py={7}>
              <Text ml={2}>Scan QR</Text>
            </Button>
          </Box>

          <Box pos="relative" mx="auto">
            <Image src={HeroGraphic} w={320} h={605} />
            <Box pos="absolute" h={530} top="38px" left="50%" transform="translateX(-50%)" width="250px" zIndex={-1}>
              <video src={HeroVideo} muted autoPlay loop style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Image pos="absolute" maxW="unset" right={-350} bottom="-100px" src={EiffelTowerImg} w="700px" />
            <Image pos="absolute" left="-30px" bottom="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" w={150} bg="#fff" shadow="xl" rounded="xl" p={3} />
          </Box>
        </SimpleGrid>
        {/* <Button mt={10} rounded="xl" shadow="2xl" leftIcon={<ScanIcon width={25} height={25} />} onClick={() => setShowPlaceModal(true)} fontSize={18} px={10} py={7}>
            <Text ml={2}>Add a Place</Text>
          </Button> */}
      </Box>

      <CreatePlaceModal open={showPlaceModal} onClose={() => setShowPlaceModal(false)} />
    </Container>
  );
};

export default Home;
