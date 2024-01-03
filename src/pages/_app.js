import "@/styles/globals.css";
import "@/styles/Button.css";
import Script from "next/script";

import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={openSans.className}>
        <Component {...pageProps} />
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=OPT-NQHBZ7H"
        strategy="afterInteractive"
      />
   
      </main>
  
    </>
  );
}
