import { Box, Stack } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as ScanIcon } from "../assets/icons/scan.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PostModal from "./PostModal";

const BottomBar = () => {
  const navigate = useNavigate();
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <>
      <Stack direction="row" pos="fixed" bottom={0} w="100%" h="56px" bg="black" align="center" justify="space-between" px={10}>
        <HomeIcon color="#fff" width={30} height={30} />
        <PlayIcon color="#fff" width={30} height={30} />
        <Box bg="blue.600" rounded="xl" py={1} px={3} onClick={() => setShowPostModal(true)}>
          <PlusIcon color="#fff" width={30} height={30} />
        </Box>
        <ScanIcon color="#fff" width={25} height={25} onClick={() => navigate("/scan")} />
        <AccountIcon color="#fff" width={30} height={30} />
      </Stack>

      <PostModal open={showPostModal} onClose={() => setShowPostModal(false)} />
    </>
  );
};

export default BottomBar;
