import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({booking}) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price, patient, email, _id} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-mu-flame.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
     },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: patient,
              email: email,
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === "succeeded"){
            //store payment data in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }
            fetch('https://doctors-portal-server-mu-flame.vercel.app/payment',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    setSuccess("Payment Successful");
                    setTransactionId(paymentIntent.id);
                }
            })
      }
      setProcessing(false);
  };

  return (
    <div className="bg-secondary p-10 w-auto lg:w-[600px] rounded">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#ffffff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-4 text-white font-bold"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-error mt-2 font-bold">{cardError}</p>
      {
        success && <div>
            <p className="text-green-500 font-bold">{success}</p>
            <p className="text-white">Your transactionId : <span className="font-bold">{transactionId}</span></p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
