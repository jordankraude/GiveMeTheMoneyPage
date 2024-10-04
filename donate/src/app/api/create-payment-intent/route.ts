import Stripe from 'stripe';

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
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    return new Response(JSON.stringify({ error: error.message || 'An unknown error occurred.' }), { status: 500 });
  }
}
