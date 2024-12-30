"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../components/checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../actions/paymentIntent";
import { useRouter } from "next/navigation";

const UsernamePage = ({ username, name }) => {
  const [showcheckout, setShowcheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()

  const resetForm = () => {
    setAmount("");
    setMessage("");
  }
  

  const intAmount = parseInt(amount);
  const nameField = `Paying to ${name}.`;

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMesageChange = (event) => {
    setMessage(event.target.value);
  };

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  const initiatePayment = async () => {
    setShowcheckout(true);

    if (!intAmount || intAmount <= 1) {
      alert("Please enter a valid amount greater than 1.");
      return;
    }

    if (!message) {
      alert("Please enter a message");
      return;
    }

    const paymentIntent = await createPaymentIntent(
      intAmount * 100,
      message
    );
    setClientSecret(paymentIntent.client_secret);
    setShowcheckout(true);
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
            <h2 className="font-bold text-left text-gray-200 text-2xl">
              {name}
            </h2>
            <h3 className="text-sm my-1 text-gray-500 text-left">
              @{username}
            </h3>
            <p className="text-gray-400">1000 followers, 1,000 posts</p>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col mx-3">
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
                  disabled
                  placeholder={nameField}
                />
                <input
                  className="rounded-lg text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:outline-gray-700 w-1/6 md:text-sm bg-gray-800 text-white p-2 px-3 my-2"
                  value={amount}
                  type="number"
                  required
                  min={1}
                  onChange={handleAmountChange}
                  placeholder="$5"
                />
              </div>
              <input
                className="rounded-lg focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2 w-full"
                type="text"
                required
                onChange={handleMesageChange}
                value={message}
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
                  <CheckoutForm show={showcheckout} setShow={setShowcheckout} message={message} onPaymentSuccess={resetForm} />
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
