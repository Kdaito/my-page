import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="h-[900px]">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}

export default MyApp;
