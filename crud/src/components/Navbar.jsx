import React, { useEffect, useState } from "react";
import {
  Box,
  Link,
  Flex,
  Image,
  useColorMode,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Login } from "../Pages/Login";

const Navbar = () => {
  const [isAddProductPage, setIsAddProductPage] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsAddProductPage(currentPath === "/add-product");
  }, []);

  return (
    <>
      <Box
        as="nav"
        align="center"
        justify="space-between"
        padding={"17px"}
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        boxShadow="md"
        display="flex"
        width={"100%"}
      >
        <Flex align="center">
          <Box width={"10%"}>
            <Image
              src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png"
              alt="Myntra logo"
              width={"50%"}
              mr={14}
            />
          </Box>

          <Box ml={5}>
            <RouterLink to="/">
              <Text fontWeight="bold" color="teal.500">
                Home
              </Text>
            </RouterLink>
          </Box>
          <Box ml={5}>
            <RouterLink to="/product">
              <Text fontWeight="bold" color="teal.500">
                Shop
              </Text>
            </RouterLink>
          </Box>
          <Box ml={5}>
            <RouterLink to="/add-product">
              <Text
                onClick={() => setIsAddProductPage(true)}
                fontWeight="bold"
                color="teal.500"
              >
                Add-Product
              </Text>
            </RouterLink>
          </Box>
          {!isAddProductPage && (
            <Flex alignItems="center" justifyContent="space-between" w={"60%"}>
              <Box ml={9} mr={15}>
                <Input width={"400px"} placeholder="Search..." />
              </Box>

              <Flex>
                <RouterLink to="/login">
                  <Button
                    variant="outline"
                    size="md"
                    color="teal.500"
                    mr={4}
                    // onClick={toggleColorMode}
                  >
                    Login
                  </Button>
                </RouterLink>
                <Button
                  variant="solid"
                  size="md"
                  bg="teal.500"
                  color="white"
                  // onClick={toggleColorMode}
                >
                  Cart
                </Button>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
