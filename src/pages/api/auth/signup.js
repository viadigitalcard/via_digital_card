import { hashPassword } from "../../../lib/auth/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import Token from "../../../models/Token";

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
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "testmymail03@gmail.com",
          pass: "testM@123",
        },
      });
      let buffer = new Buffer(req.body.email);
      let baseData = buffer.toString("base64");
      let origin = `${process.env.NEXTAUTH_URL}/verify-email/${baseData}`;

      const mailOptions = {
        from: "testmymail03@gmail.com",
        to: email,
        subject: "Verify your email",
        text: "Click on the link to verify your email",
        html: `<a href="${origin}" target="_blank">Verify Email</a>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(400).json({ error: error.message });
          console.log("this is error", error);
          return;
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent" });
        }
      });

      const hashedPassword = await hashPassword(password);

      const result = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
        premiumUser: false,
        verifyEmail: false,
        verifyToken: baseData,
      });

      res.status(201).json({ message: "Created user!" }, result);
    } catch (error) {
      res.status(500).json({ error: error.message });
      // res.status(500).json({ error: error.message });
    }
  }
}
