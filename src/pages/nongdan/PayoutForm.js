import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayoutForm = () => {
  const [payoutStatus, setPayoutStatus] = useState('');

  const handlePayout = async () => {
    try {
      const response = await fetch('https://localhost:7165/api/Nongdan/RutTien', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          RecipientEmail: 'recipient_email@example.com',
          Amount: 10.0,
          Currency: 'USD'
        })
      });

      if (response.ok) {
        setPayoutStatus('Success');
      } else {
        setPayoutStatus('Error');
      }
    } catch (error) {
      console.error(error);
      setPayoutStatus('Error');
    }
  };

  return (
    <div>
      <h2>Rút Tiền</h2>
      <PayPalScriptProvider
        options={{
          "client-id": "ARPzSYpghGxyplwkNIeJztmauqt77jaaTzqTqOet5jGqx23EnWxjEaV4JMuQRJ8cJuu9PzvYKQ_nwchQ",
          currency: "USD",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          onClick={handlePayout}
        />
      </PayPalScriptProvider>
      {payoutStatus === 'Success' && <p>Payout successful!</p>}
      {payoutStatus === 'Error' && <p>Payout failed. Please try again.</p>}
    </div>
  );
};

export default PayoutForm;
