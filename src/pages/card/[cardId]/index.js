import { useSession } from "next-auth/react";
import {
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
import Card from "../../../models/Card";
import { DigitalCard } from "../../../components/Card/DigitalCard";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
const Cards = ({ Card }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { data: session } = useSession();

  const handleDelete = async () => {
    const cardId = router.query.cardId;
    try {
      await fetch(`/api/cards/${cardId}`, {
        method: "DELETE",
      });
      router.replace("/userscard");
    } catch (error) {
      setMessage("Failed to delete the Card.");
    }
  };

  return (
    <>
      <Head>
        <title>
          {Card.name}
          {"'s Card "}
        </title>
      </Head>
      <>
        <DigitalCard data={Card} />
        {session && session.user.id == Card.card_id ? (
          <Box
            pos="absolute"
            right={["25px", "25px", "50px"]}
            top={["50px", "50px", "50px"]}
          >
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{Card.name}'s card edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <EditCard inputData={Card} />
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Menu>
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
  const cards = await Card.findById(params.cardId);
  cards._id = cards._id.toString();
  return {
    props: {
      Card: JSON.parse(JSON.stringify(cards)),
    },
  };
}

export default Cards;
