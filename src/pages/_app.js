import "@/styles/globals.css";
import "@/styles/Button.css";
import Script from "next/script";
import { CookiesProvider } from "react-cookie"
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import {  Raleway } from "next/font/google";
const openSans = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NN8XWH8' })
  }, [0]);
  return (
    <>
    <Script
      strategy="lazyOnload"
      onError={(err) => {
        console.error('Error', err)
      }}
      onLoad={() => {
        // Function to perform after loading the script
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NN8XWH8', {
              page_path: window.location.pathname,
            },);
      }}
    />
      <main className={openSans.className}>
    <CookiesProvider>
        <Component {...pageProps} />
        </CookiesProvider>
        
   
      </main>
  
    </>

    
  );
}
