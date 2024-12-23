import { useSession } from "next-auth/react";
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CheckoutForm({ show, setShow }) {

    const stripe = useStripe()
    const elements = useElements()
    const {data: session} = useSession()
    const username = session.user.username

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(!elements || !stripe){
                return
            }
            const result = await stripe?.confirmPayment({
                elements,
                confirmParams: {
                        return_url: `http://localhost:3000/${username}`,
                },
            })

            if(result.error){
                toast.error(result.error.message)
                console.log(result.error.message)
            } else {
                toast.success("Payment successful")
            }

        } catch (error) {
            console.error(error)   
        }
    }

  return (
    <>
      <div
        className="w-[100%] mt-2 p-4 rounded-xl bg-white text-black"
        style={{ display: show ? "block" : "none" }}
      >
        <h2 className="p-1 font-semibold px-3">Continue the Payment</h2>
        <div>
          <form onSubmit={handleSubmit} className="w-[100%]">
            <PaymentElement />
            <AddressElement options={{
                mode: 'billing',
                required: true,
            }} />
            <div className="flex flex-row-reverse gap-3 mt-4">
              <button
                type="submit"
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
