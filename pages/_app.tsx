import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="show-banner" strategy="lazyOnload">
        {`var vh =window.innerHeight; document.getElementById('background').style.height=vh+'px';`}
      </Script>
      <div
        id="background"
        className="fixed top-0 left-0 w-full bg-[#fff]"
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
