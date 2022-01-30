import { connectToDatabase } from "../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  console.log("helo2",session.user.id);
  if (req.method === "POST") {
    const { firstName, lastName, phoneNo } = req.body;
    const { db } = await connectToDatabase();
    await db.collection("digicards").insertOne({
      _id: session.user.id,
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
    });

    res.status(201).json({ message: "Card Created" });
  }
};
