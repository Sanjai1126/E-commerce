import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/ProductReducer/action";
import Navbar from "./Navbar";
import { ProductCard } from "./ProductCard";

import { Sidebar } from "./Sidebar";

export const ProductList = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const products = useSelector((store) => {
    console.log(store);
    return store.ProductReducer.products;
  });

  let obj = {
    params: {
      gender: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };
  //console.log(products);
  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);
  return (
    <>
      <Navbar />
      <Flex marginTop={"40px"}>
        <Sidebar />

        <Box
          // border={"2px solid green"}
          ml={"50px"}
          width={"1400px"}
          boxShadow="lg"
        >
          <Grid gap={"20px"} m={"auto"} templateColumns="repeat(4, 1fr)">
            {products.length > 0 &&
              products.map((el) => {
                return (
                  <Card
                    mt={"26px"}
                    _hover={{
                      boxShadow: "2xl",
                    }}
                    key={el.id}
                    marginLeft={"40px"}
                  >
                    <ProductCard
                      id={el.id}
                      image={el.image}
                      name={el.description}
                      price={el.price}
                      brand={el.brand}
                      gender={el.gender}
                    />
                  </Card>
                );
              })}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};
