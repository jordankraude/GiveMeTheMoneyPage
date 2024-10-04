import { Roboto, Open_Sans } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});


export const googleFonts = {
  roboto: roboto.className,
  openSans: openSans.className,
};


export const customFonts = {
  myCustomFont: 'MyCustomFont',
};
