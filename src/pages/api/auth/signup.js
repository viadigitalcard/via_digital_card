import { hashPassword } from "../../../lib/auth/auth";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function Signup(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;
    const { db } = await connectToDatabase();

    //Error handling on allready exist or create g state to handle error
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User is already registered." });
      return;
    }

    const hashedPassword = await hashPassword(password);

    try {
      const result = await db.collection("users").insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Created user!" });
    } catch (error) {
      console.log(error);
    }
  }
}
