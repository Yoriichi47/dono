"use server";

import { prisma } from "@/prisma";

export const savePayment = async ({ paymentId, userId, message }) => {

  try {
    await prisma.payments.create({
      data: {
        paymentId,
        message,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error saving to the DB: ", error);
  }
};

