import React, { useState } from "react";
export default function createDigiCard() {
  const [userCredentials1, setuserCredentials1] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
  });
  // console.log(userCredentials1);
  const { firstName, lastName, phoneNo } = userCredentials1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/cards/createdigitalcard", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNo: phoneNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log(json.message);

      if (!response.ok) throw new Error(json.message || "Something went wrong");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserCredentials1({
      ...userCredentials1,
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
          type="phone"
          placeholder="Phone"
          value={phoneNo}
          name="phoneNo"
          onChange={handleChange}
          required
          autoComplete="phone"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
