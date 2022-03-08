import { hashPassword } from "../../../lib/auth/auth";
import dbConnect from "../../../lib/dbConnect";
import Token from "../../../models/Token";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    const { email } = req.body;
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
    let origin = `${process.env.NEXTAUTH_URL}/forget-password/${baseData}`;

    const existingUser = await User.findOne({ email: email }).exec();
    console.log(existingUser);
    if (!existingUser) {
      res.status(400).json({ message: " User does not exist " });
      return;
    }

    const uploadToken = await Token.create({
      _id: baseData,
      creatorId: existingUser._id,
    });

    if (uploadToken) {
      res.status(200).json({ message: "Token created" });
    }

    const mailOptions = {
      from: "testmymail03@gmail.com",
      to: email,
      subject: "Reset Password",
      text: "Click on the link to reset your password",
      html: `<a href="${origin}" target="_blank">Click</a>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("this is error", error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent" }).end();
      }
    });
  }
  if (method === "PUT") {
    const { password } = req.body;
    const { token } = req.body;

    const tokenData = await Token.findById(token).exec();
    if (!tokenData) {
      res.status(400).json({ message: "Invalid token" });
      return;
    }

    const deleteToken = await Token.findByIdAndDelete(token).exec();

    if (!deleteToken) {
      res.status(200).json({ message: "ERROR" });
    }
    const hashedPassword = await hashPassword(password);

    const updateUser = await User.findByIdAndUpdate(
      tokenData.creatorId,
      { password: hashedPassword },
      { new: true }
    ).exec();
    if (!updateUser) {
      res.status(400).json({ message: "Error" });
    }
    res.status(200).json({ message: "Password updated" });
  }
}
