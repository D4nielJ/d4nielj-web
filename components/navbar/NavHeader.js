import Link from "next/link";
import { Box, HStack } from "@chakra-ui/react";
import { Logo } from "../shared";
import ToggleMenu from "./Toggle";

const NavHeader = ({ open, toggleOpen, handleToggleKey }) => {
  return (
    <HStack
      justify={{ base: "space-between", md: "flex-end" }}
      align="center"
      mb={16}
    >
      <Box display={{ base: "auto", md: "none" }}>
        <Link
          href="/"
          onClick={() => toggleOpen()}
          onKeyDown={(e) => handleToggleKey(e)}
          passHref
        >
          <Logo />
        </Link>
      </Box>
      <ToggleMenu
        open={open}
        onClick={() => toggleOpen()}
        onKeyDown={(e) => handleToggleKey(e)}
        color={"#fff"}
      />{" "}
    </HStack>
  );
};

export default NavHeader;
