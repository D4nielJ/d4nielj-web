import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

const Link = ({ href, children, ...props }) => {
  return (
    <Button as={NextLink} href={href} _hover={{ bg: "auto" }} {...props}>
      {children}
    </Button>
  );
};

export default Link;
