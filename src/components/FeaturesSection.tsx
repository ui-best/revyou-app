import { Text, Image, Box, SimpleGrid } from "@chakra-ui/react";
import FeatureQRImg from "../assets/feature-qr.png";
import FeatureReviewImg from "../assets/feature-review.png";
import FeatureCustomImg from "../assets/feature-custom.png";

const features = [
  { title: "Powered by QR Codes", desc: "View and post videos attached to locations with a simple scan.", icon: FeatureQRImg },
  { title: "Video Reviews", desc: "Leave an interactive review of your favorite places with a rating", icon: FeatureReviewImg },
  { title: "Custom QR Codes", desc: "Create custom QR codes by uploading your logo", icon: FeatureCustomImg },
];

const FeaturesSection = () => {
  return (
    <SimpleGrid my={20} columns={{ base: 1, md: 2, lg: 3 }} spacing={5} maxW="7xl" mx="auto">
      {features.map((feature) => (
        <Box w={300} h={200} textAlign="center" fontFamily="Poppins" mx="auto">
          <Box w="70px" h="70px" rounded="100%" shadow="xl" mx="auto" p={4}>
            <Image src={feature.icon} />
          </Box>
          <Text mt={4} fontWeight="600" letterSpacing={0} fontSize={17}>
            {feature.title}
          </Text>
          <Text mt={3} letterSpacing={0}>
            {feature.desc}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default FeaturesSection;
