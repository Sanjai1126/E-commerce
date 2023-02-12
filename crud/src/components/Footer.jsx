import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Spacer,
  Stack,
  Container,
  Link,
  VisuallyHidden,
  FormControl,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={3}>
      {children}
    </Text>
  );
};

function StatisticsBox({ title, value, color, image }) {
  return (
    <Box
      bg={color}
      color="white"
      p={9}
      rounded="md"
      border="1px solid cyan"

      //   shadow="md"
    >
      <Stack align="center" spacing={3}>
        <Flex align="center" justify="center">
          <img width={"75px"} src={image} alt={title} />
        </Flex>
        {/* <Box as={icon} size="60px" color={"red"} mr={2} /> */}
        <Heading color={"#6c6666"} as="h2" size="md">
          {value}
        </Heading>
      </Stack>
      <Text
        textAlign="center"
        color={"#a4a3a3"}
        fontSize="xs"
        fontWeight="small"
      >
        {title}
      </Text>
    </Box>
  );
}
export default function Footer() {
  return (
    <>
      <Box
        maxW={"1200px"}
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <SimpleGrid columns={{ base: 1, md: 4 }}>
          <StatisticsBox
            title="Moving Your card details to a much more secured place"
            value={"100% SECURE PAYMENTS"}
            color="white"
            image="https://i.ibb.co/zryGXLQ/credit-card-1.png"
          />
          <StatisticsBox
            title="100% Payment Protection.Easy Return Policy "
            value={"TRUSTPAY"}
            color="white"
            image="https://i.ibb.co/yFvHkXc/credit-card.png"
          />
          <StatisticsBox
            title="Got a question? Look no further.Browse our FAQs or submit your query here."
            value={"HELP CENTER"}
            color="white"
            image="https://i.ibb.co/CwZKcq8/customer-service-agent.png"
          />
          <StatisticsBox
            title="Download the app and get excitings app only offers at your fingertips"
            value={"SHOP ON THE GO"}
            color="white"
            image="https://i.ibb.co/hKmZQrN/phone.png"
          />
        </SimpleGrid>
      </Box>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        paddingTop={5}
      >
        <Container as={Stack} maxW={"1100px"} py={14}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }}>
            <Stack align={"flex-start"}>
              <ListHeader>POLICY INFO</ListHeader>
              <Link color={"#a5a5a5"} href={"#"}>
                Privacy Policy
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Terms of Sale
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Terms of Use
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Report Abuse & Takedown
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                FAQ
              </Link>
            </Stack>

            <Stack marginLeft={"30px"} align={"flex-start"}>
              <ListHeader>COMPANY</ListHeader>
              <Link color={"#a5a5a5"} href={"#"}>
                Impact@Myntra
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Careers
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Blog
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Sitemap
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Contact Us
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>SNAPDEAL BUSINESS</ListHeader>
              <Link color={"#a5a5a5"} href={"#"}>
                Shopping App
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Sell on Snapdeal
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Media Enquiries
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>POPULAR LINKS</ListHeader>
              <Link color={"#a5a5a5"} href={"#"}>
                Lehenga
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Kid's Clothing
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Sarees
              </Link>
              <Link color={"#a5a5a5"} href={"#"}>
                Winter Wear
              </Link>
            </Stack>

            <Stack
              minW={"100px"}
              marginLeft={"-100px"}
              marginTop={"2px"}
              align={"flex-start"}
            >
              <Flex
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
              >
                <Container
                  //   maxW={"lg"}
                  bg={useColorModeValue("gray.50", "gray.900")}
                  color={useColorModeValue("gray.700", "gray.200")}
                  //
                  //   rounded={"lg"}

                  direction={"column"}
                >
                  <Heading
                    color={"#344c55"}
                    as={"h2"}
                    textAlign="left"
                    fontSize={"18px"}
                    mb={17}
                    marginLeft={"10px"}
                  >
                    SUBSCRIBE
                  </Heading>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    as={"form"}
                    spacing={"12px"}
                  >
                    <FormControl>
                      <Input
                        rounded="none"
                        variant={"solid"}
                        borderWidth={0}
                        color={"gray.400"}
                        _placeholder={{
                          color: "gray.400",
                        }}
                        type="text"
                        placeholder={"Your Email Address"}
                      />
                    </FormControl>
                    <FormControl w={{ base: "100%", md: "40%" }}>
                      <Button
                        bg={"black"}
                        color={"white"}
                        _hover={{ bg: "blue.600" }}
                        w={"100px"}
                        rounded="none"
                        fontSize="14px"
                        h={"40px"}
                      >
                        SUBSCRIBE
                      </Button>
                    </FormControl>
                  </Stack>
                  <Text
                    mt={2}
                    fontSize="13px"
                    textAlign={"left"}
                    color={"gray.500"}
                  >
                    Register now to get updates on promotions and coupons. Or{" "}
                    <a color="black" href="#">
                      Download App
                    </a>
                  </Text>
                </Container>
              </Flex>
              {/* <AppStoreBadge />
              <PlayStoreBadge /> */}
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            // as={Stack}
            maxW={"1200"}
            py={9}
            direction={{ base: "row", md: "row" }}
            // spacing={4}
            // justify={{ md: "space-between" }}
            // align={{ md: "center" }}
          >
            {/* <Text fontSize="xl" textAlign={"left"}>
                PAYMENT
              </Text> */}
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Stack isInline spacing={3}>
                <Text fontSize="xl" padding={"10px"} mb={15}>
                  PAYMENT
                </Text>
                <Image
                  key={1}
                  src="https://i.ibb.co/Sr0ZWZ0/credit-card-10.png"
                  alt="card1"
                />
                <Image
                  key={2}
                  src="https://i.ibb.co/d212wQ6/credit-card-11.png"
                  alt="card2"
                />
                <Image
                  key={3}
                  src="https://i.ibb.co/MZwjsZn/credit-card-9.png"
                  alt="card3"
                />
                <Image
                  key={4}
                  src="https://i.ibb.co/tcq8bJ9/diners-club-3.png"
                  alt="card2"
                />

                <Image
                  key={6}
                  src="https://i.ibb.co/9cBgkfv/transaction.png"
                  alt="card3"
                />
                {/* <Image
                    key={5}
                    src="https://i.ibb.co/8shdDgS/cash-on-delivery-1.png"
                    alt="card3"
                    w={"50px"}
                    marginBottom={"-50px"}
                    h={"2px"}
                  /> */}
              </Stack>

              <Stack isInline spacing={1}>
                <Text fontSize="xl" padding={"10px"} mb={15}>
                  CONNECT
                </Text>
                <Image
                  src="https://i4.sdlcdn.com/img/footer/facebook@4x.png"
                  alt="card1"
                  w={"50px"}
                  h={"55px"}
                />
                <Image
                  src="https://i1.sdlcdn.com/img/footer/twitter@4x.png"
                  alt="card2"
                  w={"50px"}
                  h={"55px"}
                />
                <Image
                  src="https://i1.sdlcdn.com/img/footer/youtube@4x.png"
                  alt="card3"
                  w={"50px"}
                  h={"55px"}
                />
                <Image
                  src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png"
                  alt="card2"
                  w={"50px"}
                  h={"55px"}
                />
                <Image
                  src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png"
                  alt="card3"
                  w={"55px"}
                  h={"59px"}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box
        borderTopWidth={0}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"1200px"}
          py={1}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            Copyright © 2023, Urban Fasion Limited. All Rights Reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
