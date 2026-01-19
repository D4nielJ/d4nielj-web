import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const ActiveLink = ({ name, href, onClick, onKeyDown }) => {
  const router = useRouter();

  return (
    <Link
      as={NextLink}
      href={href}
      onClick={onClick}
      onKeyDown={onKeyDown}
      textTransform="uppercase"
      fontSize="3xl"
      fontWeight="light"
      letterSpacing="wider"
      textDecoration={router.asPath === href ? "line-through" : "none"}
      color={router.asPath === href && "white"}
      _hover={
        router.asPath === href
          ? { textDecoration: "line-through", color: "white" }
          : { textDecoration: "none", color: "white" }
      }
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
    >
      {name}
    </Link>
  );
};

export default ActiveLink;

// router.asPath === href
