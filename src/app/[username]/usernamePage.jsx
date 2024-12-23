"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../components/checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../actions/paymentIntent";

const UsernamePage = ({username}) => {
  const [showcheckout, setShowcheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("")

  const intAmount = parseInt(amount);
  const { data: session } = useSession();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  const initiatePayment = async () => {
    setShowcheckout(true);

    if (intAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return; 
  }

    const paymentIntent = await createPaymentIntent(
      intAmount * 100,
      session.user.id
    );
    setClientSecret(paymentIntent.client_secret);
  };

  return (
    <>
      <div className="cover w-full">
        <div className="bg-black">
          <img
            className="border-4 m-auto bg-black md:h-[340px] xl:h-[600px] border-green-800 md:w-full xl:w-[90%] object-cover"
            src="https://cdn-useast1.kapwing.com/static/templates/anime-discord-banner-regular-1f6b5f44.webp"
            alt=""
          />
        </div>
        <div className="flex w-full">
          <img
            className="rounded-full border-4 mx-5 border-red-400 w-[120px] h-[120px]"
            src="https://i.ytimg.com/vi/rvX8cS-v2XM/maxresdefault.jpg"
            alt=""
          />
          <div className="text-center my-auto">
            <h1 className="text-2xl font-bold ">@{username}</h1>
            <p className="mt-2 text-gray-400">1000 followers, 1,000 posts</p>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <div className="border supporters p-3 my-3">
          <h1 className="text-2xl mb-1 underline font-bold">Supporters</h1>
          <div className="border-t pt-2 supportList">
            <ul className="text-center text-gray-400">
              <li>Asus donated $10</li>
              <li>HP donated $50</li>
              <li>ASRock donated $10</li>
            </ul>
          </div>
        </div>
        <div className="border makePayment p-3 my-3">
          <h1 className="text-2xl mb-1 underline font-bold">Make Payment</h1>
          <div className="border-t pt-2 supportList">
            <div className="flex flex-col w-2/5 mx-auto items-center">
              <div className="flex w-full gap-3">
                <input
                  className="rounded-lg md:text-sm focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2 w-5/6"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="rounded-lg text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:outline-gray-700 w-1/6 md:text-sm bg-gray-800 text-white p-2 px-3 my-2"
                  value={amount}
                  type="number"
                  min={5}
                  onChange={handleAmountChange}
                  placeholder="$5"
                />
              </div>
              <input
                className="rounded-lg focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2 w-full"
                type="text"
                placeholder="Enter the message"
              />

              <button
                onClick={initiatePayment}
                className="bg-gray-800 transition-all hover:bg-gray-700 text-white p-2 mt-1 rounded-md"
              >
                Donate
              </button>
              {clientSecret && (
                <Elements
                  stripe={stripePromise}
                  options={{ clientSecret: clientSecret }}
                >
                  <CheckoutForm show={showcheckout} setShow={setShowcheckout} />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsernamePage;
