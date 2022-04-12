import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 300, easing: "ease-in-out" });
  }, []);
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
