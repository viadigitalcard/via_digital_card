import { connectToDatabase } from "../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  // console.log("helooooooo", typeof session);
  if (session) {
    // Signed in
    console.log("Session", session);
  }
  const { db } = await connectToDatabase();

  const vadapav = await db.collection("digicards").find({}).toArray();

  console.log(vadapav);
  res.json(vadapav);
  res.status(200).json({ message: "okayyy " });
};
