import React, { useState, useEffect } from "react";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import CreateDigiCard from "../../components/CreateDigiCard";

const Usercard = () => {
  const [Card, setCard] = useState();
  const { data: session, status } = useSession();
  console.log(Card);
  const handleDelete = () => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch("/api/getcard/getuserscard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      setCard(responseData && responseData);
    };
    fetchCards();
  }, []);

  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <CreateDigiCard />
        <button onClick={signOut}>sign out</button>
        {/* {console.log(Card.map(res))} */}
        {Card &&
          Card.map((res, i) => (
            <div key={i}>
              <div>Card {i + 1} </div>
              <div>{res.firstname}</div>
              <div>{res.card_id}</div>
              <div>{res.lastname}</div>
              <div>{res.phoneno}</div>
              <div>------------------</div>
            </div>
          ))}
      </>
    </>
  );
};

export default Usercard;
