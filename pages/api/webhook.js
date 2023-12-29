import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SK);

const endpointSecret =
  "whsec_e5a20d29486eb84123b9dedd0ac30d1a66a952f5075c4bf26aaf928b71275b8a";
export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId
      const paid = data.payment_status === 'paid'
      if(orderId && paid){
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        })
      }
      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).send('OK')
}

//elan-succes-glow-goood
//acct_1ORVdqBpZqCggMEr

export const config = {
  api: { bodyParser: false },
};
