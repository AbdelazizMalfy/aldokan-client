'use client';

import React, { useEffect } from 'react';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import axios from 'axios';

interface Appearance {
  theme: 'stripe' | 'night' | 'flat' | undefined;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState('');

  useEffect(() => {
    const paymentData = {
      orderID: '20',
      amount: 500,
    };

    const fetchMyAPI = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/api/payments/create-stripe-payment`,
          paymentData,
        );
        console.log('response', response.data);
        setClientSecret(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyAPI();
  }, []);

  const appearance: Appearance = {
    theme: 'stripe',
  };

  const options: StripeElementsOptions | undefined = {
    clientSecret,
    appearance,
  };

  console.log('clientSecret', clientSecret);

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
