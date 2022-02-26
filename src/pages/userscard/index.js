import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";
import CreateDigiCard from "../../components/CreateDigiCard";
import EditCard from "../../components/EditCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import dbConnect from "../../lib/dbConnect";
import Card from "../../models/Card";
import {
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

const Usercard = ({ Cards }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <CreateDigiCard />

        <button onClick={signOut}>sign out</button>
        {Cards &&
          Cards.map((res, i) => (
            <div key={i}>
              <div>Card {i + 1} </div>
              <div>{res.Name}</div>
              <div>{res.card_id}</div>
              <div>{res.lastname}</div>
              <div>{res.phoneno}</div>
              <div>Object ID {res._id}</div>
              <Link href="card/[cardId]" as={`card/${res._id}`}>
                <Button>View</Button>
              </Link>
              <Button onClick={onOpen} ml="10px">
                Edit
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{res.Name}'s card edit</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <EditCard inputData={res} />
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button>Update</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <div>---------------------------</div>
            </div>
          ))}
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
