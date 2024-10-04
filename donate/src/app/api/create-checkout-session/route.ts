import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia', // Specify the API version as needed
});

export async function POST(req: Request) {
  const { amount } = await req.json();

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
    success_url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
    cancel_url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/donate/cancel`,
  });

  // Return the session URL instead of redirecting
  return NextResponse.json({ url: session.url });
}
