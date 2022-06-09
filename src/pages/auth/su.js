import Head from "next/head";
import React from "react";
import SignUp from "../../components/SignUp/SignUp";

function signUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
    </>
  );
}

export default signUp;
