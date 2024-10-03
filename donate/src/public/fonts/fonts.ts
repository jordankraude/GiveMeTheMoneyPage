// Import Google Fonts using @next/font
import { Roboto, Open_Sans } from '@next/font/google';

// Initialize Google Fonts
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});

// Export Google Fonts
export const googleFonts = {
  roboto: roboto.className,
  openSans: openSans.className,
};

// Custom fonts can be managed using @font-face in a separate CSS file

// Export the custom font name (use this in the CSS later)
export const customFonts = {
  myCustomFont: 'MyCustomFont',
};
