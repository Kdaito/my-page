import React from "react";
import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <div className="bg-white py-[100px] md:py-[200px] rounded-t-2xl relative z-10">
      <div className="w-full md:w-[600px] lg:w-[800px] px-[30px] md:px-0 mx-auto">
        <h2
          data-aos="fade-up"
          className="w-[100%] lg:w-[70%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] flex items-center after:h-[1px] after:grow after:bg-main/[0.3] after:ml-[15px] lg:after:ml-[30px]"
        >
          <span className="text-point-main">A</span>bout me
        </h2>
        <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row lg:gap-[40px]">
          <div
            data-aos="fade-up"
            className="flex-1 tracking-wide leading-8 text-[17px] text-text/[0.8] pt-[60px] md:pt-0"
          >
            <p>
              Hello! Thank you for visiting my portfolio! My name is{" "}
              <span className="text-main">Kobayashi Hiroto</span>. After
              graduating from highschool in Aichi, I became a college student
              and living alone in Hikone, Shiga Prefecture in Japan.
            </p>
            <p className="py-[15px]">
              My interest in{" "}
              <span className="text-main">Web development</span> started
              when I was 19 year&apos;s old. After then, I&apos;ve been studying
              programming to become a web developer.
            </p>
            <p>
              Now, I&apos;m working at a startup company in Tokyo as a forntend
              web developer. In there, I develop web applications with{" "}
              <span className="text-main">Vue.js</span>,{" "}
              <span className="text-main">React.js</span>,{" "}
              <span className="text-main">Next.js</span>, and so on.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="h-[250px] w-[250px] md:mt-[40px] lg:mt-0 md:h-[300px] md:w-[300px] ml-[35px] md:mx-auto lg:ml-0 bg-point-main relative after:w-[250px] md:after:w-[300px] after:h-[250px] md:after:h-[300px] after:absolute after:top-[20px] after:border-[3px] after:border-point-main after:left-[20px] after:z-[-1]"
          >
            <Image
              src="/profile.jpg"
              alt="profile icon"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
