// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export default function handler(req, res) {
  try {
    // const { price } = req.params;
    // console.log(price);

    const planId = "plan_J65cozB9BrOnYH";
    const options = {
      plan_id: planId,
      total_count: 12, //if 12 then for 1 year in one month gap or 1 for one month
      quantity: 1,
      customer_notify: 0,
    };

    instance.subscriptions.create(options, (err, order) => {
      console.log(err);
      if (err) {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
}
