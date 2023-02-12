import styled from "@emotion/styled";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  Button,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { addProduct } from "../Redux/ProductReducer/action";
import Footer from "../components/Footer";

const initialState = {
  image: "",
  brand: "",
  price: "",
  description: "",
  gender: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "blue.500", dark: "yellow.500" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
    // console.log(e.target.value);
    // console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct(initialState);
    console.log("accc");
  };

  return (
    <>
      <Navbar />

      <FormDiv>
        <Text fontSize={"30px"} marginY={"20px"}>
          Admin Page
        </Text>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormControl>
            <FormLabel>Image-url</FormLabel>
            <Input
              type="url"
              name="image"
              value={product.image}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Product-Brand</FormLabel>
            <Input
              type="text"
              name="brand"
              value={product.brand}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Price</FormLabel>
            <Input
              type="text"
              name="price"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={product.description}
              onChange={(e) => handleChange(e)}
            />

            <FormLabel>Gender</FormLabel>
            <HStack spacing={"24px"}>
              <Radio
                id="male"
                name="gender"
                value="male"
                onChange={(e) => handleChange(e)}
                isChecked={product.gender === "male"}
                mr={4}
              >
                Male
              </Radio>
              <Radio
                id="female"
                name="gender"
                value="female"
                onChange={(e) => handleChange(e)}
                isChecked={product.gender === "female"}
                mr={4}
              >
                Female
              </Radio>
              <Radio
                id="kids"
                name="gender"
                value="kids"
                onChange={(e) => handleChange(e)}
                isChecked={product.gender === "kids"}
                mr={4}
              >
                Kids
              </Radio>
            </HStack>
          </FormControl>
          <br />
          <Button
            size="lg"
            variant="outline"
            color={bgColor[colorMode]}
            _hover={{ transform: "scale(1.1)", boxShadow: "md" }}
            type="submit"
          >
            Add Product
          </Button>
        </form>
      </FormDiv>
      <Footer />
    </>
  );
};
const FormDiv = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
  margin-top: 60px;
`;
