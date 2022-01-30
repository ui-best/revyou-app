import { Box, Button, Stack, SimpleGrid, Container, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeroGraphic from "../assets/phone-hero.png";
import HeroVideo from "../assets/hero-video.mp4";
import { ReactComponent as ScanIcon } from "../assets/icons/scan.svg";
import LogoImg from "../assets/logo.png";
import DevpostLogo from "../assets/devpost.png";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import EiffelTowerImg from "../assets/eiffel.png";
import FeaturesSection from "../components/FeaturesSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="full" p={0}>
      <Stack h="60px" direction="row" justify="space-between" py={3} px={5}>
        <Image src={LogoImg} h="100%" />
        <Button mt={10} rounded="md" shadow="lg" bg="#1350ff" color="#fff" fontSize={16} px={9} py={5} onClick={() => navigate("/places")}>
          Open App
        </Button>
      </Stack>
      <Box pos="relative" w="100%" fontFamily="Poppins">
        <SimpleGrid maxW="7xl" columns={{ base: 1, lg: 2 }} h="80%" align="center" mx="auto">
          <Box my="50px" textAlign="left" px={{ base: 5, lg: 20 }}>
            <Text mt={10} mb={5} color="#1350ff" fontSize={17} lineHeight={1} fontWeight="600" letterSpacing={0} whiteSpace="nowrap">
              <Image src={DevpostLogo} w="25px" display="inline" mr={2} verticalAlign="middle" />
              <Text
                mr={3}
                display="inline"
                onClick={() => {
                  window.location.href = "https://devpost.com/software/revyou";
                }}
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
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

            <Button mt={10} rounded="md" shadow="lg" bg="#1350ff" color="#fff" leftIcon={<ScanIcon width={25} height={25} />} onClick={() => navigate("/scan")} fontSize={18} px={16} py={7} zIndex={10}>
              <Text ml={2}>Scan QR</Text>
            </Button>
          </Box>

          <Box pos="relative" mx="auto" h={605}>
            <Image src={HeroGraphic} w={320} h="100%" />
            <Box pos="absolute" h={530} top="37px" left="50%" borderRadius={20} overflow="hidden" transform="translateX(-50%)" width="250px" zIndex={-1}>
              <video src={HeroVideo} muted autoPlay loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Image pos="absolute" maxW="unset" right={-350} bottom="-100px" src={EiffelTowerImg} w="700px" />
            <Image pos="absolute" left="-30px" bottom="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" w={150} bg="#fff" shadow="xl" rounded="xl" p={3} />
          </Box>
        </SimpleGrid>
        {/* <Button mt={10} rounded="xl" shadow="2xl" leftIcon={<ScanIcon width={25} height={25} />} onClick={() => setShowPlaceModal(true)} fontSize={18} px={10} py={7}>
            <Text ml={2}>Add a Place</Text>
          </Button> */}
      </Box>

      <FeaturesSection />

      <Stack h={100} bg="#222" p={5} justify="flex-end">
        <Text color="#fff" fontFamily="Poppins" fontWeight="500">
          Made by Yabuyeet
        </Text>
      </Stack>
    </Container>
  );
};

export default Home;
