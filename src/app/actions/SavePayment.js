"use server";

import { prisma } from "@/prisma";
import { auth } from "@/auth";

export const savePayment = async ({
  amount,
  paymentId,
  userId,
  description,
}) => {
  const session = await auth();

  try {
    await prisma.payment.create({
      data: {
        amount: amount,
        order_id: paymentId,
        message: description,
        to_user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return { success: true };
  } catch (error) {
    console.log("Error saving to the DB: ", error.stack);
    return { success: false, error: error.message };
  }
};
