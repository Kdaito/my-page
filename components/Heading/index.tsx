import React, { useContext, useRef } from "react";
import { ScrollContext } from "../../provider/scrollProvider";

const Heading: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);

  const headingRefContainer = useRef<HTMLDivElement>(null);
  const { current: headingCurrent } = headingRefContainer;

  let headingProgress = 0;

  if (headingCurrent) {
    headingProgress = Math.min(scrollY / headingCurrent.clientHeight);
  }
  return (
    <div className="h-[100vh] bg-transparent text-white relative z-1">
      <div
        ref={headingRefContainer}
        className="w-[100%] md:w-[600px] lg:w-[1000px] mx-auto h-full flex flex-col items-start justify-center px-[30px] md:px-0 pt-[50px]"
        style={{ transform: `translateY(${headingProgress * 40}vh)` }}
      >
        <p
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          className="md:text-[17px] lg:text-[20px] text-point-main tracking-widest"
        >
          Hi, My name is
        </p>
        <h1
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="700"
          className="text-[50px] md:text-[60px] lg:text-[74px] text-text/[0.9] font-bold md:tracking-wide"
        >
          Kobayashi Hiroto.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="1400"
          className="text-[20px] md:text-[30px] lg:text-[35px] mt-[25px] lg:mt-0 text-text/[0.6] font-medium tracking-wide"
        >
          文系大学生 × WEBエンジニア
        </p>
        <p
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="1500"
          className="mt-[20px] lg:mt-[10px] mb-[35px] lg:my-[35px] text-text/[0.4] lg:w-[500px] tracking-wide"
        >
          Welcome to my portfolio! I am a student at Shiga University and a web
          developer specializing in front-end. I created this page myself using
          Next.js. I also created my blog, so, please check out there, too!
        </p>
        <a
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="1800"
          href="https://my-blog-kdaito.vercel.app/"
          className="border border-point-main rounded text-white px-[30px] py-[10px] z-1 relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-point-main before:origin-center before:scale-x-0 before:transition-all hover:before:scale-x-100"
        >
          check out my blog!
        </a>
      </div>y
    </div>
  );
};

export default Heading;
