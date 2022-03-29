import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-[100%]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
