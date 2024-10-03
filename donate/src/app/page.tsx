'use client';
import { useState } from 'react';

export default function DonationPage() {
  const [amount, setAmount] = useState(1000);  // Default $10 donation

  const handleDonate = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),  // Pass the donation amount
    });

    if (res.ok) {
      const { url } = await res.json();
      window.location.href = url;  // Redirect to the Stripe Checkout
    }
  };

  return (
    <div>
      <h1>Donate</h1>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(Number(e.target.value) * 100)} 
        placeholder="Enter donation amount in USD" 
      />
      <button onClick={handleDonate}>Donate ${amount / 100}</button>
    </div>
  );
}
