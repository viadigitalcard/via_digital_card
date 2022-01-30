import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";
import CreateDigiCard from "./createDigiCard";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header({ sections }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
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
      <div>{session && <></>}</div>
    </header>
  );
}
export const getStaticProps = async () => {
  const { db } = await connectToDatabase();

  const sections = await db.collection("digicards").findOne({
    _id: "61f4373a933efb5427d16095",
  });

  const data = JSON.stringify(sections);
  console.log("dhruv desai", data);

  return {
    props: {
      sections: data,
    },
  };
};
