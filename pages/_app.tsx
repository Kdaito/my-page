import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-[100vh] w-full bg-[#fff]"
        style={{
          background:
            "radial-gradient(circle at -20% -20%, #ff77f6, #bb77ff, #7881ff, #78ceff, #79ffe4, #79ff98)",
        }}
      />
      <Header />
      <div className="min-h-[100%]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
