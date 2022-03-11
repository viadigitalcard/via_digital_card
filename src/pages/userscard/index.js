import Head from "next/head";
import { getSession, signOut, useSession } from "next-auth/react";
import dbConnect from "../../lib/dbConnect";
import Card from "../../models/Card";
import { CardList } from "../../components/Card/CardList";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  VStack,
  Flex,
  Text,
  Button,
  Box,
  Center,
  Image,
  HStack,
  useColorModeValue,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";

const Usercard = ({ Cards }) => {
  const bgColor = useColorModeValue("black.200", "white");
  const bg = useColorModeValue("white", "black.100");
  const iconBg = useColorModeValue("greenBrand.100", "white");
  const textHover = useColorModeValue("white", "greenBrand.100");
  const textHoverMobile = useColorModeValue("greenBrand.100", "white");
  const textColor = useColorModeValue("black", "white");
  console.log(Cards);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <Box
          pos="absolute"
          right={["65px", "65px", "80px"]}
          top={["10px", "10px", "10px"]}
        >
          <Menu isLazy={true} computePositionOnMount={true}>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />
            <MenuList color="white" w="20px">
              <NextLink href="/create" passHref>
                <Button ml={4} variant={"outline"} color="black">
                  Create New Card +
                </Button>
              </NextLink>
              <MenuItem onClick={signOut} bg={"black"}>
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
          <DarkModeSwitch />
        </Box>
        {Cards && Cards.length ? (
          Cards.map((res, i) => <CardList key={i} data={res} />)
        ) : (
          <Center w="100%">
            <VStack w="95%" mt="50px" maxW={"1205px"} spacing="15px">
              <Box
                role="group"
                borderRadius={"30px"}
                w="100%"
                boxShadow="8px 8px 35px 0px #0000001A"
                _hover={{ bgColor: "greenBrand.100" }}
                bgColor={bg}
                height={"80px"}
              >
                <Flex
                  w="100%"
                  justifyContent={"space-between"}
                  alignItems="center"
                  borderRadius={"30px"}
                  pr="43px"
                >
                  <Flex alignItems={"center"}>
                    <Box
                      _groupHover={{ color: "white" }}
                      color={textColor}
                      ml={{ base: "10px", md: "45px" }}
                    >
                      <Text
                        fontWeight={"500"}
                        fontSize={{ base: "1.25rem", md: "1.25rem" }}
                      >
                        Looks like you have not created any cards yet.
                      </Text>
                    </Box>
                  </Flex>
                  <NextLink href="/create" passHref>
                    <Button
                      _groupHover={{ bg: bg, color: "greenBrand.100" }}
                      fontSize={"1.5rem"}
                      mt={5}
                      display={{ base: "none", md: "block" }}
                    >
                      Create new Card +
                    </Button>
                  </NextLink>
                </Flex>
              </Box>
            </VStack>
          </Center>
        )}
      </>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  await dbConnect();
  const cards = await Card.find({
    card_id: { $eq: session?.user?.id },
  }).exec();
  const data = JSON.parse(JSON.stringify(cards));

  return {
    props: {
      Cards: data,
    },
  };
}
export default Usercard;
