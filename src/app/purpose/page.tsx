'use client';

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
      <h1 className='text-4xl font-bold mb-6 text-gray-800'>About Us</h1>
      <p className='text-lg text-gray-600 mb-4 mx-8'>
        I am a broke college student making projects on my free time to help become more familiar with technologies. I am always starving..
      </p>
      <p className='text-lg text-gray-600 mb-4 mx-8'>
        Every contribution, no matter how small, can create meaningful change. Join me in my mission to stop college student hunger!
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
