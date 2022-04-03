// import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import { histories } from "../data";

type HistoryProps = {
  label: string;
  year: string;
  contents: string;
};

type HistoryData = {
  id: string;
  title: string;
  year: string;
  contents: string;
};

type Props = {
  historyDatas: HistoryData[];
};

const History: React.VFC<HistoryProps> = ({ label, contents, year }) => (
  <dd className="relative lg:ml-[60px] border-l-[1px] border-text/[0.5] py-[40px] md:py-[60px] lg:py-[40px] pl-[20px] lg:pl-[50px]">
    <p className="absolute bg-point-main text-main font-bold text-[17px] top-0 left-[-10px] lg:top-[20px] lg:left-[-100px] px-[20px] py-[3px] rounded">
      {year}
    </p>
    <p className="text-[25px] font-medium text-text/[0.8] tracking-wide relative">
      {label}
    </p>
    <p className="mt-[15px] leading-7 tracking-wide text-text/[0.6]">
      {contents}
    </p>
  </dd>
);

export const getStaticProps = async () => {
  // const { contents } = await client.get({
  //   endpoint: "history",
  //   queries: { orders: "publishedAt" },
  // });
  // const contents: HistoryData[] = [];
  return {
    props: {
      historyDatas: histories as HistoryData[],
    },
  };
};

const Home: React.VFC<Props> = ({ historyDatas }) => {
  return (
    <>
      <Head title="Profile" />
      {/* heading */}
      <div className="h-[100vh]">
        <div className="w-[100%] md:w-[600px] lg:w-[1000px] mx-auto h-full flex flex-col items-start justify-center px-[30px] md:px-0 pt-[50px]">
          <p className="md:text-[17px] lg:text-[20px] text-point-main tracking-widest">
            Hi, My name is
          </p>
          <h1 className="text-[50px] md:text-[60px] lg:text-[74px] text-text/[0.9] font-bold tracking-wide">
            Kobayashi Hiroto.
          </h1>
          <p className="text-[25px] md:text-[30px] lg:text-[35px] mt-[25px] lg:mt-0 text-text/[0.6] font-medium tracking-wide">
            文系大学生 × WEBエンジニア
          </p>
          <p className="mt-[20px] lg:mt-[10px] mb-[35px] lg:my-[35px] text-text/[0.4] lg:w-[500px] tracking-wide">
            Welcome to my portfolio! I am a student at Shiga University and a
            web developer specializing in front-end. I created this page myself
            using Next.js. I also created my blog, so, please check out there,
            too!
          </p>
          <a
            href="https://my-blog-kdaito.vercel.app/"
            className="border border-point-main rounded text-point-main px-[30px] py-[10px] lg:hover:bg-point-main lg:hover:text-main duration-200"
          >
            check out my blog!
          </a>
        </div>
      </div>
      {/* profile */}
      <div className="w-[100%] md:w-[600px] lg:w-[800px] px-[30px] md:px-0 mx-auto mt-[100px]">
        <h2 className="w-[100%] lg:w-[70%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] flex items-center after:h-[1px] after:grow after:bg-text/[0.3] after:ml-[15px] lg:after:ml-[30px]">
          <span className="text-point-main">A</span>bout me
        </h2>
        <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row lg:gap-[40px]">
          <div className="flex-1 tracking-wide leading-8 text-[17px] text-text/[0.8] pt-[60px] md:pt-0">
            <p>
              Hello! Thank you for visiting my portfolio! My name is{" "}
              <span className="text-point-main">Kobayashi Hiroto</span>. After
              graduating from highschool in Aichi, I became a college student
              and living alone in Hikone, Shiga Prefecture in Japan.
            </p>
            <p className="py-[15px]">
              My interest in{" "}
              <span className="text-point-main">Web development</span> started
              when I was 19 year&apos;s old. After then, I&apos;ve been studying
              programming to become a web developer.
            </p>
            <p>
              Now, I&apos;m working at a startup company in Tokyo as a forntend
              web developer. In there, I develop web applications with{" "}
              <span className="text-point-main">Vue.js</span>,{" "}
              <span className="text-point-main">React.js</span>,{" "}
              <span className="text-point-main">Next.js</span>, and so on.
            </p>
          </div>
          <div className="h-[250px] w-[250px] md:mt-[40px] lg:mt-0 md:h-[300px] md:w-[300px] ml-[35px] md:mx-auto lg:ml-0 bg-point-main relative after:w-[250px] md:after:w-[300px] after:h-[250px] md:after:h-[300px] after:absolute after:top-[20px] after:border-[3px] after:border-point-main after:left-[20px] after:z-[-1]">
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
      {/* history */}
      <div className="w-[100%] md:w-[600px] lg:w-[800px] px-[30px] md:px-0 mx-auto my-[150px] md:my-[300px]">
        <h2 className="w-[100%] lg:w-[80%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] lg:ml-auto lg:pr-[50px] flex items-center after:h-[1px] after:grow md:after:grow-0 after:bg-text/[0.3] after:ml-[15px] md:after:ml-0 before:h-[1px] md:before:grow before:bg-text/[0.3] md:before:mr-[30px]">
          <span className="text-point-main">H</span>istory
        </h2>
        <p className="text-center md:text-right lg:pr-[100px] text-text/[0.7]">
          You can see my main Career, here.
        </p>
        <dl className="px-[15px] lg:px-[30px] w-full mx-auto mt-[40px] md:mt-[100px]">
          {historyDatas.map((date) => (
            <div key={date.id}>
              <History
                label={date.title}
                year={date.year}
                contents={date.contents}
              />
            </div>
          ))}
        </dl>
      </div>
    </>
  );
};

export default Home;
