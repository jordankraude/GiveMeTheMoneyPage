'use client';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#5e17eb] to-[#3b150b] text-white text-center p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Donation Platform</h1>
      <p className="text-lg mb-6">
        Your generosity helps me get groceries and continue learning. Join me in my mission to stop hunger for college students!
      </p>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
        <button 
          className="bg-[#5e17eb] hover:bg-white text-white hover:text-[#5e17eb] font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 mb-4 sm:mb-0"
          onClick={() => window.location.href = '/donate'} // Link to the donation page
        >
          Make a Donation
        </button>
        
        <button 
          className="bg-[#3b150b] hover:bg-white text-white hover:text-[#3b150b] font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          onClick={() => window.location.href = '/about'} // Link to the About page
        >
          Learn More
        </button>
      </div>
      
    </div>
  );
}
