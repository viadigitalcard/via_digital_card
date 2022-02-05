import { connectToDatabase } from "../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const id = session?.user?.id;
  const { db } = await connectToDatabase();
  const { method } = req;
  if (method === "GET") {
    const vadapav = await db
      .collection("digicards")
      .find({
        card_id: { $eq: id },
      })
      .toArray();
    res.status(200).json(vadapav);
  }
}
