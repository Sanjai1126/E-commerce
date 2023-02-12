import {
  Box,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");

  const [category, setCategory] = useState(initialState || []);

  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    // console.log(category);
  };

  const handleSort = (e) => {
    // console.log(e.target.value);
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <>
      <Box
        marginLeft={"20px"}
        width={"200px"}
        // h={"400px"}
        bg="gray.100"
        boxShadow="lg"
      >
        <Heading marginTop={"20px"} fontSize="2xl" textColor={"cyan.800"}>
          Filter
        </Heading>
        <Heading
          textAlign={"left"}
          marginTop="10px"
          marginBottom={"10px"}
          fontSize={"xl"}
          textColor={"gray.500"}
        >
          Gender
        </Heading>
        <Flex mb="1rem">
          <input
            type="checkbox"
            value="male"
            onChange={handleChange}
            checked={category.includes("male")}
          />

          <Text ml="0.5rem">Men</Text>
        </Flex>
        <Flex mb="1rem">
          <input
            type="checkbox"
            value="female"
            onChange={handleChange}
            checked={category.includes("female")}
          />
          <Text ml="0.5rem">Women</Text>
        </Flex>
        <Flex mb="1rem">
          <input
            type="checkbox"
            value="kids"
            onChange={handleChange}
            checked={category.includes("kids")}
          />
          <Text ml="0.5rem">Kids</Text>
        </Flex>

        <Box mb={4}>
          <FormLabel htmlFor="sort">
            <Heading fontSize={"lg"} textColor={"gray.500"} mb="0.5rem">
              Sort By Price
            </Heading>
          </FormLabel>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            onChange={handleSort}
          >
            <input
              type="radio"
              name="order"
              value={"asc"}
              defaultChecked={order === "asc"}
              //defaultchecked
            />
            <label
              style={{
                display: "inline-block",
                width: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Low to High
            </label>
            <input
              type="radio"
              name="order"
              value={"desc"}
              defaultChecked={order === "desc"}
            />
            <label
              style={{
                display: "inline-block",
                width: "150px",
                textAlign: "right",
                paddingRight: "13px",
              }}
            >
              High to Low
            </label>
          </div>
        </Box>
      </Box>
    </>
  );
};
