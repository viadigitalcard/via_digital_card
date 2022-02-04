import { connectToDatabase } from "../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const id = session?.user?.id;
  const { db } = await connectToDatabase();
  const { method, body } = req;
  if (method === "GET" && session) {
    const vadapav = await db
      .collection("digicards")
      .find({
        id: { $eq: id },
      })
      .toArray();
    res.status(200).json(vadapav);
    // res.status(500).json({ message: "chal bhagg" });
  }
}
