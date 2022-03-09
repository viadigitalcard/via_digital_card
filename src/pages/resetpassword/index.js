import React, { useState } from "react";

function Reset() {
  const [email, setEmail] = useState("");

  const handleMail = async (e) => {
    const res = await fetch("/api/auth/resetpassword", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(res.status);
    }
  };

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

export default Reset;
