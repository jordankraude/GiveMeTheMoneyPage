'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track if mobile menu is open

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed w-full z-50">
        <div className={`container mx-auto transition-all duration-300 m-auto text-white bg-[#5e17eb] ${scrolled ? 'rounded-none w-screen mt-0' : 'mt-2 w-4/5 rounded-3xl'}`}>
          <div className="p-3 flex justify-center ">
            <nav className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'w-full mx-8' : 'w-4/5'}`}>
              <div className="text-lg font-bold">
                <Link href={'/'}>
                <Image src={'/images/3.png'} alt="logo" width={60} height={60} />
                </Link>
              </div>

              {/* Desktop Nav Links */}
              <ul className="hidden lg:flex space-x-8 relative">
                {[
                  { href: '/donate/donate-third', label: 'Donate-Secure 3rd Party' },
                  { href: '/donate/donate-seamless', label: 'Seamless Donate' },
                  { href: '/purpose', label: 'Purpose' },
                  { href: '/goals', label: 'Goals' }
                ].map((link, index) => (
                  <li key={index} className="relative group">
                    <Link href={link.href} className="transition-colors duration-300">
                      {link.label}
                    </Link>
                    {/* Underline effect */}
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-white scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left group-hover:translate-x-0 group-hover:animate-bounce-x"></span>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? '✖' : '☰'}
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <ul className="lg:hidden flex flex-col space-y-2 mt-4">
              {[
                { href: '/donate/donate-third', label: 'Donate-Secure 3rd Party' },
                { href: '/donate/donate-seamless', label: 'Seamless Donate' },
                { href: '/purpose', label: 'Purpose' },
                { href: '/goals', label: 'Goals' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="block p-2 hover:bg-gray-700 rounded text-center">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {/* Styles for the bouncing underline */}
      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .group-hover:animate-bounce-x {
          animation: bounce-x 0.5s;
        }
      `}</style>
    </>
  );
};

export default Header;
