import { connectToDatabase } from "../../../lib/mongodb";

export default async function createdigitalcard(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    const { db } = await connectToDatabase();
    const data = await db.collection("digicards").insertOne({
      ...body,
    });
    res.status(201).json(data);
  }
}
