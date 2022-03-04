import type { NextPage } from "next";
import Image from "next/image";
import { client } from "../lib/client";
import { formatDate } from "../lib/date";
import styles from "../styles/profile.module.scss";

type HistoryProps = {
  label: string;
  year: Date;
  contents: string;
};

type HistoryData = {
  id: string;
  title: string;
  year: Date;
  contents: string;
};

type Props = {
  historyDatas: HistoryData[];
};

const History: React.VFC<HistoryProps> = ({ label, contents, year }) => (
  <dd className="relative md:ml-[140px] border-l-[3px] py-[40px] lg:py-[60px] pl-[20px] before:content-[''] before:h-[20px] before:w-[20px] before:bg-text before:absolute before:rounded-[100%] before:left-[-11px]">
    <p className="md:absolute md:left-[-110px]">{formatDate(year)}</p>
    <p className="text-[21px] mt-[2px] md:mt-0 mb-[7px]">{label}</p>
    <p className="mt-[15px] leading-7 tracking-wide">{contents}</p>
  </dd>
);

export const getStaticProps = async () => {
  // const { contents } = await client.get({
  //   endpoint: "history",
  //   queries: { orders: "publishedAt" },
  // });
  const contents: HistoryData[] = [];
  return {
    props: {
      historyDatas: contents,
    },
  };
};

const Home: React.VFC<Props> = ({ historyDatas }) => {
  return (
    <>
      <div className="pt-[90px] h-[100vh]">
        <div className="flex items-center justify-between lg:justify-center flex-col-reverse lg:flex-row pt-[80px] md:pt-[150px] relative">
          <div className="mt-[40px] text-center mb-[250px] lg:my-0 lg:mr-[90px]">
            <h2 className="text-[36px]">Kobayashi Hiroto</h2>
            <p className="text-[21px]">Welcome to my page !</p>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconImageWrapper}>
              <div className={styles.icon}>
                <Image src="/icon.jpg" alt="icon" layout="fill" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 lg:bottom-[-140px]">
            <p className="text-[25px] animate-bounce">↓ scroll</p>
          </div>
        </div>
      </div>
      <div className="mt-[50px] pb-[90px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[350px] md:w-[700px] lg:w-[1000px] bg-card rounded-lg flex items-center justify-center flex-col py-[50px] md:px-[70px] lg:px-[150px]">
            <h2 className="text-[32px]">Profile</h2>
            <div className="flex items-center justify-between flex-col md:flex-row text-center">
              <div className="py-[30px]">
                <div className="h-[250px] md:h-[200px] w-[250px] md:w-[200px] relative rounded-[100%] overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="profile icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-[30px] mt-[30px] lg:mt-[10px]">小林 大斗</p>
                <p className="text-[19px] tracking-wider">kobayashi hiroto</p>
                <p className="text-[17px] mt-[15px]">愛知県出身・20歳</p>
              </div>
              <div className="px-[32px] md:pr-0 lg:pl-[60px]">
                <p className="text-[17px] leading-8 tracking-wider text-left">
                  愛知県の高校を卒業したのち、進学に伴い滋賀県彦根市で一人暮らしを始める。部活もサークルも特にやっていなかったので暇を埋めるためにプログラミングを始めた。その後何やかんやで事が進み、現在は東京の企業で長期インターン生として、主にフロントエンドを中心に開発を行なっている。夢はWEBエンジニアになることである。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center mt-[40px]">
          <div className="w-[350px] md:w-[700px] lg:w-[1000px] bg-card rounded-lg flex items-center justify-center flex-col py-[50px] md:px-[20px] lg:px-[150px]">
            <h2 className="text-[32px]">History</h2>
            <dl className="px-[30px] w-full">
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
        </div>
      </div>
    </>
  );
};

export default Home;
