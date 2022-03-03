import Head from "next/head";
import { getSession } from "next-auth/react";
import dbConnect from "../../lib/dbConnect";
import Card from "../../models/Card";
import { CardList } from "../../components/Card/CardList";

const Usercard = ({ Cards }) => {
  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <CardList />
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
