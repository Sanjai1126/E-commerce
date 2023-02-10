import React from "react";
import { Box, Link, Flex, Image, useColorMode } from "@chakra-ui/react";
// import { ReactComponent as HamburgerIcon } from "./hamburger.svg";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.0rem"
      bg={bg[colorMode]}
      color="gray.500"
      boxShadow="md"
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1000"
    >
      <Flex align="center" mr={5}>
        <Image
          src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png"
          alt="Myntra logo"
          width={"6%"}
          mr={14}
        />
        <Link>Home</Link>
        <Link ml={4}>Shop</Link>
      </Flex>
      <Box
        display={{ sm: "block", md: "none" }}
        onClick={toggleColorMode}
      ></Box>
    </Flex>
  );
};

export default Navbar;
