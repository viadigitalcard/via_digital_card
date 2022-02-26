import Card from "../../../models/Card";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // case "PUT" /* Edit a model by its ID */:
    //   try {
    //     const pet = await Card.findByIdAndUpdate(req.body, {
    //       new: true,
    //       runValidators: true,
    //     });
    //     if (!pet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: pet });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    case "POST":
      try {
        const card = await Card.create(req.body);
        /* create a new model in the database */
        res.status(201).json({ success: true, data: card });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
