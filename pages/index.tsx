import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/profile.module.scss";

type History = {
  label: string;
  year: string;
  children: React.ReactNode;
};

const History: React.VFC<History> = ({ label, children, year }) => (
  <dd className="relative md:ml-[140px] border-l-[3px] py-[20px] pl-[20px] before:content-[''] before:h-[20px] before:w-[20px] before:bg-[#fff] before:absolute before:rounded-[100%] before:left-[-11px]">
    <p className="md:absolute md:left-[-110px]">{year}</p>
    <p className="text-[21px] mt-[2px] md:mt-0 mb-[7px]">{label}</p>
    <p className="mt-[15px] leading-7 tracking-wide">{children}</p>
  </dd>
);

const Home: NextPage = () => {
  return (
    <>
      <div className="pt-[90px] h-[100vh]">
        <div className="min-h-[100%] flex items-center justify-between md:justify-center flex-col-reverse md:flex-row pt-[80px] md:pt-0 relative">
          <div className="mt-[40px] text-center mb-[250px] md:my-0 md:mr-[90px]">
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
          <div className="absolute bottom-[50px]">
            <p className="text-[25px]">↓ scroll</p>
          </div>
        </div>
      </div>
      <div className="pt-[50px] pb-[90px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[350px] md:w-[700px] lg:w-[1000px] bg-[#222] rounded-lg flex items-center justify-center flex-col py-[50px] md:px-[70px] lg:px-[150px]">
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
          <div className="w-[350px] md:w-[700px] lg:w-[1000px] bg-[#222] rounded-lg flex items-center justify-center flex-col py-[50px] md:px-[20px] lg:px-[150px]">
            <h2 className="text-[32px]">History</h2>
            <dl className="px-[30px] w-full">
              <History year="2017-04-01" label="高校進学">
                愛知県の県立高校に進学。サッカー部に所属。この頃は特に将来の事を考えることはなく、来たる大学受験と成人に少々怯えながらも、毎日部活、勉強に励んでいた。毎週水曜日にあるランメニューが最高のストレスで、今思い出しても嫌な気持ちになる。
              </History>
              <History year="2020-04-01" label="大学進学">
                滋賀大学に進学。入学時には具体的な目標ややりたいことがなく、「俺は一人で静かに過ごしたいぜ」とこじらせてしまい部活にもサークルにも参加しなかった。また、コロナ禍で大学がオンラインになったことも重なり、ぼっち大学生に。一年生の秋頃から約一年間居酒屋のバイトをして人見知りを克服した。
              </History>
              <History year="2020-11-01" label="プログラミングスクール入学">
                一年生の夏頃に、学校の授業で触れたことをきっかけにプログラミングの勉強を開始。ぼっち大学生になったことが功を奏し、ほとんどの時間をプログラミングの勉強に費やす。本格的にプログラミングを学びたいと思い、秋頃にスクールに入学する。この頃からwebエンジニアになりたいという目標を持つようになる。
              </History>
              <History year="2021-5-25" label="長期インターン開始">
                約四ヶ月の学習期間を終えて、スクールを卒業。実務経験を求めて長期就業型インターンを探し始める。ここでイーストフィールズ株式会社様に拾っていただき、念願のwebエンジニアとしての長期インターン開始。主にフロントエンドを中心に開発に従事。
              </History>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
