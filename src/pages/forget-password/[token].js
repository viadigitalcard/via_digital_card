import Head from "next/head";
import React, { useRef } from "react";
import dbConnect from "../../lib/dbConnect";
import Token from "../../models/Token";

export default function ResetPasswordTokenPage({ token, valid }) {
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPassword = await fetch("/api/auth/resetpassword", {
      method: "PUT",
      body: JSON.stringify({
        token,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await newPassword.json();
    console.log(data);
  };
  if (!valid)
    return (
      <>
        <h1>Invalid Link</h1>
        <p>
          It looks like you may have clicked on an invalid link. Please close
          this window and try again.
        </p>
      </>
    );

  return (
    <>
      <Head>
        <title>Forget password</title>
      </Head>
      <h1>Forget password</h1>
      <p>Enter a new password for your account</p>
      <form onSubmit={handleSubmit}>
        <input
          ref={passwordRef}
          type="password"
          autoComplete="new-password"
          placeholder="New Password"
        />
        <button type="submit">Reset password</button>
      </form>
    </>
  );
}
export async function getServerSideProps({ params }) {
  await dbConnect();
  const token = await Token.findById(params.token).exec();
  console.log(token);
  return { props: { token: params.token, valid: !!token } };
}
