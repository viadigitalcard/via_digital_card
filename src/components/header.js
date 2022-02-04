import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";
import CreateDigiCard from "./createDigiCard";
import { useEffect, useState } from "react";

export default function Header() {
  const [Card, setCard] = useState([]);
  console.log("main", Card && Card);
  const { data: session, status } = useSession();
  const loading = status === "loading";

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
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {/* {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )} */}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>

      <div>{session && <CreateDigiCard />}</div>
      <div>
        {Card.firstname}
        {/* {Card.map((res) => {
          <div>{res.firstname}</div>;
        })} */}
      </div>
    </header>
  );
}
