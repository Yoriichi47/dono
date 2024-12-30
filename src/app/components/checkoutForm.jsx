import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { savePayment } from "@/app/actions/SavePayment";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export function CheckoutForm({ show, setShow, message }) {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const name = session.user.name;
  const userId = session.user?.id;
  const username = encodeURIComponent(name);

  const loader = () => {
    setTimeout(() => {
      return true;
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!elements || !stripe) {
        toast.error("Stripe not loaded");
        return;
      }
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `http://localhost:3000/${username}`,
        },
        redirect: "if_required",
      });

      if (result.error) {
        toast.error(result.error.message);
      } else {
        toast.success("Payment Successful");

        await savePayment({
          amount: result.paymentIntent.amount,
          paymentId: result.paymentIntent.id,
          userId: userId,
          description: message,
        });
      }
    } catch (error) {
      toast.error(`Error in submit handle: ${error}`);
      return `Error in submit handle: ${error}`;
    }
  };

  return (
    <>
      <div
        className="w-[100%] mt-2 p-4 rounded-xl bg-white text-black"
        style={{ display: show ? "block" : "none" }}
      >
        <ToastContainer />
        <h2 className="p-1 font-semibold px-3">Continue the Payment</h2>
        <div>
          <form onSubmit={handleSubmit} className="w-[100%]">
            <PaymentElement />
            <div className="flex flex-row-reverse gap-3 mt-4">
              <button
                type="submit"
                onClick={() => loader()}
                className="rounded-lg w-[50%] py-2 bg-blue-800 text-white"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setShow(false);
                }}
                className="bg-red-300 w-[50%] rounded-lg py-2 text-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
