import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51MYpR2LreJWMR3euIfHCrgX30kPJ1ZO1djcl7aUI5t4Sy1FzuRYgVguy5I8Mlva1I7NuP9g1RMfXih9iNZ4im4Zg007jS5huV4");
const Payment = () => {
  const booking = useLoaderData();
  return (
    <div className="m-5 mt-32 lg:m-10 ">
      <h1 className="text-3xl">Payment for {booking?.treatment}</h1>
      <p className="text-xl">Please pay <strong>${booking?.price}</strong> for your appointment on {booking?.appointmentDate} at {booking?.slot}</p>
      <div className="my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
