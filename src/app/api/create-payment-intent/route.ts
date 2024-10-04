import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia', 
});

export async function POST(req: Request) {
  const { amount } = await req.json();

  if (!amount || amount <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid donation amount.' }), { status: 400 });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
  // Type assertion to make sure error is of type Error
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
  console.error('Error creating payment intent:', errorMessage);
  return NextResponse.json({ error: errorMessage }, { status: 500 });
}
}
