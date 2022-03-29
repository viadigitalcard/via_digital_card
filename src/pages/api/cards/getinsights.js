import Insights from "../../../models/Insights";
import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const id = session && session.user.id;

  await dbConnect();
  //find all insights for the id
  const insights = await Insights.findOne({ user: id });
  console.log(insights);
  res.status(200).json(insights);
}
