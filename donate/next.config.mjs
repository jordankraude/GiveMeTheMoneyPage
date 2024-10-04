/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      YOUR_DOMAIN: process.env.YOUR_DOMAIN || 'http://localhost:3000', // Add a default value for local development
    },
  };
  
  export default nextConfig;
  