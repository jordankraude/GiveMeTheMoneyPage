'use client';

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
      <h1 className='text-4xl font-bold mb-6 text-gray-800'>About Us</h1>
      <p className='text-lg text-gray-600 mb-4 mx-8'>
        We are a non-profit organization dedicated to making a positive impact in our community. Your donations help us fund essential programs and services.
      </p>
      <p className='text-lg text-gray-600 mb-4 mx-8'>
        Every contribution, no matter how small, can create meaningful change. Join us in our mission to make the world a better place!
      </p>
      <button 
        onClick={() => window.location.href = '/donate'} // Redirect to the donation page
        className='bg-[#5e17eb] hover:bg-[#3b150b] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300'
      >
        Make a Donation
      </button>
    </div>
  );
}
