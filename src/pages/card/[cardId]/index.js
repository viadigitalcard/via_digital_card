import { useSession } from "next-auth/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import dbConnect from "../../../lib/dbConnect";
import EditCard from "../../../components/EditCard";
import { default as ModalCard } from "../../../models/Card";
import { DigitalCard } from "../../../components/Card/DigitalCard";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Cards = ({ Card }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { data: session } = useSession();
  const contentType = "application/json";

  function updateViews(params) {
    const views = params + 1;
    return views;
  }

  async function updateviewsDB(params) {
    const values = {
      _id: Card?._id,
      views: params,
    };
    const response = await fetch("/api/cards", {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(values),
    });
    const responseData = await response.json();
  }

  useEffect(() => {
    if ((Card && Card?.name === "") || !Card) {
      router.replace("/");
    }
    const updatedViews = updateViews(Card && Card.views);
    updateviewsDB(updatedViews);
  });

  const handleDelete = async () => {
    const cardId = router.query.cardId;
    try {
      await fetch(`/api/cards/${cardId}`, {
        method: "DELETE",
      });
      router.replace("/cards");
    } catch (error) {
      setMessage("Failed to delete the Card.");
    }
  };

  return (
    <>
      <Head>
        <title>{Card?.name != "" ? `${Card?.name}'s card` : "None Card"}</title>
      </Head>
      <>
        {Card?.name != "CastError" ? (
          Card && Card ? (
            <DigitalCard data={Card} />
          ) : (
            <Box
              w="100%"
              h="100%"
              bg="gray.100"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              p="4"
              textAlign="center"
            >
              <Box
                w="100%"
                fontSize="xl"
                fontWeight="semibold"
                color="gray.600"
              >
                No Card
              </Box>
            </Box>
          )
        ) : (
          "ERROR"
        )}

        {session && session.user.id == Card.card_id ? (
          <Box
            pos="absolute"
            right={["25px", "25px", "50px"]}
            top={["50px", "50px", "60px"]}
          >
            <Drawer
              size="md"
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`${Card.name}'s card`}</DrawerHeader>

                <DrawerBody>
                  {" "}
                  <EditCard inputData={Card} />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Menu isLazy={true} computePositionOnMount={true}>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList bgColor="brand.100" color="white" w="20px">
                <MenuItem onClick={handleDelete} icon={<DeleteIcon />}>
                  Delete
                </MenuItem>
                <MenuItem onClick={onOpen} icon={<EditIcon />}>
                  Edit
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();
  const cards = await ModalCard.findById(params.cardId).then(
    (card) => card,
    (error) => error
  );

  // cards && cards ? (cards._id = cards?._id.toString()) : null;

  return {
    props: {
      Card: JSON.parse(JSON.stringify(cards && cards ? cards : null)),
    },
  };
}

export default Cards;
