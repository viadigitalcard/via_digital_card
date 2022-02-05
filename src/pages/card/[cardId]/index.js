import Head from "next/head";
// import ObjectID from "mongodb";

import { connectToDatabase } from "../../../lib/mongodb";

const Card = ({ card }) => {
  console.log("dddddddd", card);
  //   const { firstname, lastname, phoneno, card_id } = card;
  return (
    <>
      <Head>
        <title>{} Card </title>
        <meta name="description" content="Merlyn Clothing collection item" />
      </Head>

      <div>
        {card.map((res, i) => (
          <div key={i}>
            <div>Card {i + 1} </div>
            <div>{res.firstname}</div>
            <div>{res.card_id}</div>
            <div>{res.lastname}</div>
            <div>{res.phoneno}</div>
            <div>------------------</div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { db } = await connectToDatabase();

  const cards = await db.collection("digicards").find({}).toArray();

  const paths = cards.map((card) => {
    return {
      params: {
        cardId: card.card_id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { cardId } = params;

  console.log(cardId);

  const { db } = await connectToDatabase();

  const card = await db
    .collection("digicards")
    .find({ card_id: { $eq: cardId } })
    .toArray();

  if (!card) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      card: JSON.parse(JSON.stringify(card)),
    },
  };
};

export default Card;
