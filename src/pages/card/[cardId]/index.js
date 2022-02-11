import Head from "next/head";
import { useRouter } from "next/router";
import dbConnect from "../../../lib/dbConnect";
import Card from "../../../models/Card";

const Cards = ({ Card }) => {
  const router = useRouter();

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
      <div>{Card.card_id}</div>
      <div>{Card.firstname}</div>
      <div>{Card.lastname}</div>
      <div>{Card.phoneno}</div>
      <div>{Card._id}</div>
      <button className="btn delete" onClick={handleDelete}>
        Delete
      </button>
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
