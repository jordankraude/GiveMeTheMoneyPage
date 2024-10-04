import { NextResponse } from 'next/server';
import Stripe from 'stripe'; // Import Stripe using ES Module syntax

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia', // Adjust API version if necessary
});

export async function POST(req: Request) {
  const { amount } = await req.json(); // Optionally, pass the donation amount from the client

  // Use a type assertion to tell TypeScript that baseUrl is a string
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined in environment variables.");
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
            },
            unit_amount: amount || 1000, // Default to $10 if no amount passed
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success`, // Use the baseUrl directly here
      cancel_url: `${baseUrl}/cancel`,
    });

    // Check if session.url is defined before redirecting
    if (session.url) {
      return NextResponse.redirect(session.url); // Redirect the user to Stripe's Checkout page
    } else {
      throw new Error("Failed to create a session URL.");
    }
  } catch (error : any) {
    console.error('Error creating session:', error);
    return new Response(JSON.stringify({ error: error.message || 'An unknown error occurred.' }), { status: 500 });
  }
}
