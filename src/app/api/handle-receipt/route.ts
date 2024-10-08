import { NextResponse } from 'next/server';
import Stripe from 'stripe'; // Import Stripe using ES Module syntax

// Create an instance of Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia', // Adjust API version if necessary
});

// Define the expected structure of the request body
interface DonationRequest {
  amount?: number; // Optional amount, can be undefined
}

export async function POST(req: Request) {
  // Parse the request body
  const { amount }: DonationRequest = await req.json(); 

  // Use a type assertion to ensure baseUrl is a string
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  // Check if baseUrl is defined
  if (!baseUrl) {
    return new Response(
      JSON.stringify({ error: "NEXT_PUBLIC_BASE_URL is not defined." }),
      { status: 500 }
    );
  }

  try {
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
            },
            unit_amount: amount ? amount : 1000, // Default to $10 if no amount passed
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
      return NextResponse.redirect(session.url); // Redirect to Stripe's Checkout page
    } else {
      throw new Error("Failed to create a session URL.");
    }
  } catch (error: unknown) {
    console.error('Error creating session:', error);
    
    // Handle known and unknown errors
    const errorMessage = 
      error instanceof Error ? error.message : 'An unknown error occurred.';

    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
