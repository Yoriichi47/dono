"use server";

import { auth } from "@/auth";
import Stripe from "stripe";

export const createPaymentIntent = async (amount) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await auth()

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "CAD",
  });

  await prisma.payment.create({
    data: {
      order_id: paymentIntent.id,
      amount: amount,
      userId: session.user.id,
    },
  });
  console.log("Payment data added");
  console.log("User Id: ", session.user.id);    
  return paymentIntent;
};
