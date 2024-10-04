'use client';

import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function CancelPage() {
  const router = useRouter();

  // useEffect(() => {
  //   // Check if the donation was initiated
  //   const donationInitiated = sessionStorage.getItem('donationInitiated');

  //   if (!donationInitiated) {
  //     // If not, redirect to the donation page
  //     router.push('/donate/donate-third'); // Adjust the path as necessary
  //   } else {
  //     // Clear the session variable after successful navigation
  //     sessionStorage.removeItem('donationInitiated');
  //   }
  // }, [router]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-50'>
      <h1 className='text-4xl font-bold mb-4 text-[#3b150b]'>Donation Cancelled</h1>
      <p className='text-lg text-gray-600 mb-8'>We&apos;re sorry to see you go. If you have any questions, feel free to contact us.</p>
      <div className='flex space-x-4'>
        <button 
          onClick={() => router.push('/donate/donate-third')} // Redirect to the 3rd party donation page
          className='bg-[#5e17eb] hover:bg-white text-white hover:text-[#5e17eb] font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300'
        >
          Return to 3rd Party Donation
        </button>
        <button 
          onClick={() => router.push('/donate/donate-seamless')} // Redirect to the seamless donation page
          className='bg-[#3b150b] hover:bg-white text-white hover:text-[#3b150b] font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300'
        >
          Return to Seamless Donation
        </button>
      </div>
    </div>
  );
}
