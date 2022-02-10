import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function CreateDigiCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneno] = useState("");
  const { data: session } = useSession();
  // console.log(session.user.id);

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/cards", {
      method: "POST",
      body: JSON.stringify({
        card_id: session.user.id,
        firstname: firstName,
        lastname: lastName,
        phoneno: phoneNo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    // console.log(responseData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            autoFocus
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          placeholder="Phone"
          value={phoneNo}
          onChange={(e) => setPhoneno(e.target.value)}
          required
          autoComplete="phone"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
