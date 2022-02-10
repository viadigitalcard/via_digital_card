import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const { firstName, lastName, email, password, confirmPassword } =
    userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(res.status);
      }
      setUserCredentials({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      router.replace("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            value={firstName}
            name="firstName"
            onChange={handleChange}
            required
            autoFocus
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          name="email"
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
