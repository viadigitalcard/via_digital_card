import Head from "next/head";
import { getSession, signOut, useSession } from "next-auth/react";
import dbConnect from "../../lib/dbConnect";
import Card from "../../models/Card";
import { CardList } from "../../components/Card/CardList";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

const Usercard = ({ Cards }) => {
  console.log(Cards);
  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <button onClick={signOut}>sign out</button>
        <DarkModeSwitch />
        {Cards && Cards.map((res, i) => <CardList key={i} data={res} />)}
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
