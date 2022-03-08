import React, { useState } from "react";

function reset() {
  const [email, setEmail] = useState("");

  const handleMail = async (e) => {
    console.log(email);
    const res = await fetch("/api/auth/resetpassword", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw new Error(res.status);
    }
  };
  // const sendEmail = async (email) => {
  //   console.log(email);
  //   await forgotPasswordEmail(email)
  //     .then((res) => {
  //       console.log("Done" + res);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div>
      <h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleMail}>
          Send
        </button>
      </h1>
    </div>
  );
}

export default reset;
