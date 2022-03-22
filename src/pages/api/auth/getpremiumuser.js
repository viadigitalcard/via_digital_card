import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { getSession } from "next-auth/react";

export default async function getUser(req, res) {
  const session = await getSession({ req });
  console.log(session);

  await dbConnect();
  try {
    const response = await User.findOne({
      email: session && session.user.email,
    });
    if (!res) {
      res.status(400).json({ error: "No user found" });
      return;
    }
    const data = JSON.parse(JSON.stringify(response));
    let premiumUser = data.premiumUser;
    console.log(premiumUser);
    if (premiumUser) {
      res.status(200).json({ message: "User is premium" });
      return;
    }
    if (!premiumUser) {
      res.status(400).json({ message: "User is not premium" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
}
