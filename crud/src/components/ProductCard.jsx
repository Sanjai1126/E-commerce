import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Card,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, price, brand, gender }) => {
  return (
    <Flex
      spacing={4}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Image src={image} width={"200px"} height={"150px"} alt={id} />
      </Box>
      <Box>
        <Text fontWeight="semibold" marginTop={2}>
          {brand}
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold" marginTop={2}>
          Price: {price}
        </Text>
        <Text marginTop={2}>{gender}</Text>
      </Box>
      <Box mt={"10px"}>
        <Link to={`/product/${id}`}>
          <Button
            background={"cyan.400"}
            width={"150px"}
            _hover={{
              transform: "scale(1.2)",
              color: "black",
              background: "darkturquoise",
            }}
          >
            View
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
