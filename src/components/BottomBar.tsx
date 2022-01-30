import { Box, Stack } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as ScanIcon } from "../assets/icons/scan.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import PostModal from "./PostModal";
import AccountModal from "./AccountModal";

const BottomBar = () => {
  const navigate = useNavigate();
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    const file = inputRef.current!.files![0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <>
      <Stack direction="row" pos="fixed" bottom={0} left="50%" transform="translateX(-50%)" w="100%" h="56px" bg="black" align="center" justify="space-between" px={10} maxW={800}>
        <HomeIcon color="#fff" width={30} height={30} onClick={() => navigate("/")} />
        <PlayIcon color="#fff" width={30} height={30} onClick={() => navigate("/places")} />
        <Box bg="blue.600" rounded="xl" py={1} px={3} onClick={() => inputRef.current!.click()}>
          <PlusIcon color="#fff" width={30} height={30} />
        </Box>
        <ScanIcon color="#fff" width={25} height={25} onClick={() => navigate("/scan")} />
        <AccountIcon color="#fff" width={30} height={30} onClick={() => setShowAccountModal(true)} />
      </Stack>

      <PostModal
        file={file}
        open={!!file}
        onClose={() => {
          setFile(undefined);
        }}
      />
      <AccountModal open={showAccountModal} onClose={() => setShowAccountModal(false)} />

      <input ref={inputRef} type="file" capture="environment" accept="video/*" onChange={onChange} style={{ display: "none" }} />
    </>
  );
};

export default BottomBar;
