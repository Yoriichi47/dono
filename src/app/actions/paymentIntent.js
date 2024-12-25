"use server";

import { auth } from "@/auth";
import Stripe from "stripe";

export const createPaymentIntent = async (amount, message) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await auth();

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "CAD",
    metadata: {
      userId: session.user.id,
      message
    }
  });
  
  return paymentIntent;
};
