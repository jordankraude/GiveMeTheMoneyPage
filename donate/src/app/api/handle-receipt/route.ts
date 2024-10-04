import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Load Stripe secret key from env

export async function POST(req: Request) {
  const { amount } = await req.json();  // Optionally, pass the donation amount from the client

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donation',
        },
        unit_amount: amount || 1000,  // Default to $10 if no amount passed
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,  // Make sure you have this in your env file
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return NextResponse.redirect(session.url);  // Redirect the user to Stripe's Checkout page
}
