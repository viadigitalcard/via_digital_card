import { ObjectId } from "mongodb";
import dbConnect from "../../../lib/dbConnect";
import InsightsSchema from "../../../models/Insights";
export default async function handler(req, res) {
  const { method } = req;
  console.log(req.body);
  const { user } = req.body;
  //   console.log(data, user);
  await dbConnect();

  if (method === "POST") {
    //if user scheme exist then update else create new

    const userSchema = await InsightsSchema.findOne({ user: user });
    if (userSchema) {
      const data = {
        instagram: [...userSchema.instagram, { createdAt: new Date() }],
      };
      const users = await InsightsSchema.findOneAndUpdate(
        { user: user },
        data,
        {
          new: true,
        }
      );
      if (!users) {
        return res.status(400).json({ message: "Does not find User" });
      }
      res.status(200).json({ message: "User is Updated" });
    } else {
      const data = {
        user: user,
        instagram: [{ createdAt: new Date() }],
      };
      const users = await InsightsSchema.create(data);
      if (!users) {
        return res.status(400).json({ message: "Does not find User" });
      }
      res.status(200).json({ message: "User is Updated" });
    }
  }
}

//     try {
//       const res = await InsightsSchema.create({
//         _id: ObjectId(req.body.user),
//         instagram: [{ createdAt: new Date() }],
//       });
//       res.status(200).json({ message: "Insights Updated" });
//     } catch (error) {
//       res.status(500).json({ message: "Error updating card" });
//     }
//   }
// }
