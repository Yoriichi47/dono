"use server";

import { auth } from "@/auth";
import Stripe from "stripe";

export const createPaymentIntent = async (amount, description) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await auth();

  // if (isNaN(amount) || amount <= 0) {
  //   throw new Error("Invalid amount. Amount must be a positive integer.");
  // }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      description: description,
      currency: "CAD",
      metadata: {
        userId: session.user.id,
      },
    });
    return paymentIntent;
  } catch (error) {
    console.error("Error creating payment intent: ", error);
    throw new Error("Error creating payment intent.");
  }
};
