import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: email,
          password: password,
        });

        if (!result.error) {
          router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={handleChange}
          name="email"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
          name="password"
          autoComplete="password"
        />
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </>
  );
};
