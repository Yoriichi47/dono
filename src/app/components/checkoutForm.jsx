import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { savePayment } from "../actions/SavePayment";
import { useSession } from "next-auth/react";

export function CheckoutForm({ show, setShow, message }) {

    const stripe = useStripe()
    const elements = useElements()
    const {data: session} = useSession()
    const name = session.user.name
    const username = encodeURIComponent(name)

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
                console.log(result.error.message)
            } else {
              console.log(result.paymentIntent)
                const saveResult = await savePayment({
                  paymentId: result.paymentIntent.id, 
                  userId: session.user.id,
                  message: message
                })
                if(saveResult.success){
                    console.log("Payment saved", saveResult.payment)
                } else {
                  console.error("Payment not saved", saveResult.error)
                }
            }

        } catch (error) {
            console.error(`Error in submit handle: ${error}`)   
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
