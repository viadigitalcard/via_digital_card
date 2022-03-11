import { hashPassword } from "../../../lib/auth/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function Signup(req, res) {
  const { firstName, lastName, email, password } = req.body;

  const { method } = req;
  if (method === "POST") {
    //Error handling on allready exist or create g state to handle error
    await dbConnect();
    try {
      const existingUser = await User.findOne({
        email: email.toLowerCase(),
      }).exec();
      console.log(existingUser);
      if (existingUser) {
        res.status(422).json({ error: "User already exists" });
        return;
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    const hashedPassword = await hashPassword(password);

    try {
      const result = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
        premiumUser: false,
      });

      res.status(201).json({ message: "Created user!" }, result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
