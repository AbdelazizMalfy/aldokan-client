'use cleint';

import React from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      setMessage(error.message || '');
    } else {
      setMessage('An unexpected error occurred.');
    }

    router.push('/checkout/success');
    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  };

  if (!stripe || !elements || isLoading) {
    <div>Loading...</div>;
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          className="w-full p-2 mt-4 text-white rounded-md bg-primary"
          disabled={isLoading}
          id="submit"
        >
          Pay now
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
