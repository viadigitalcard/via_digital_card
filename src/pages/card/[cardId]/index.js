import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import dbConnect from "../../../lib/dbConnect";
import Card from "../../../models/Card";
import { DigitalCard } from '../../../components/Card/DigitalCard'
const Cards = ({ Card }) => {
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
        <title>{Card.firstname} Card </title>
        <meta name="description" content="Merlyn Clothing collection item" />
      </Head>
      <DigitalCard/>
      <div>{Card.card_id}</div>
      <div>{Card.firstname}</div>
      <div>{Card.lastname}</div>
      <div>{Card.phoneno}</div>
      <div>OBJECT ID {Card._id}</div>
      {session && session.user.id == Card.card_id ? (
        <button className="btn delete" onClick={handleDelete}>
          Delete
        </button>
      ) : (
        ""
      )}
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
