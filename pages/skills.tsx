import Image from "next/image";
import { useRouter } from "next/router";

type SkillCardProps = {
  src: string;
  label: string;
  link: string;
};

const SkillCard: React.VFC<SkillCardProps> = ({ src, label, link }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(link)}>
      <div className="w-[300px] py-[40px] bg-skillCard rounded-lg flex flex-col items-center justify-center lg:hover:scale-110 duration-200">
        <div className="relative w-[150px] h-[150px]">
          <Image src={src} alt="language icon" layout="fill" />
        </div>
        <p className="pt-[20px] text-[24px]">{label}</p>
      </div>
    </button>
  );
};
const Skills: React.VFC = () => {
  return (
    <div className="pt-[90px] min-h-[100vh]">
      <div className="w-[300px] md:w-[640px] mx-auto bg-card mt-[40px] md:mt-[70px] lg:mt-[100px] rounded-lg py-[30px] px-[30px] md:px-[60px] lg:px-[100px] lg:mb-[100px] leading-7 tracking-wide">
        <p className="text-center text-[32px] pb-[20px]">Skills</p>
        <p className="pb-[30px]">
          スクール、ポートフォリオ作成、インターンなどを通して経験した言語、フレームワーク、ライブラリなどを紹介します。以下で紹介するものは一定の経験があるものであり、全てが完璧に扱えるわけではありません。Productsページにて、実際にポートフォリオを紹介しておりますので、詳しくはそちらをご覧ください。
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="flex w-full md:px-[50px] lg:px-[400px] pt-[50px] pb-[40px] items-center text-[30px] after:h-[3px] after:grow after:bg-border after:ml-[30px] before:h-[3px] before:grow before:bg-border before:mr-[30px]">
          Languages
        </p>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          <SkillCard src="/svg/javascript.svg" label="Javascript" link="https://developer.mozilla.org/ja/docs/Web/JavaScript" />
          <SkillCard src="/svg/typescript.svg" label="Typescript" link="https://www.typescriptlang.org/" />
          <SkillCard src="/svg/php.svg" label="php" link="https://www.php.net/manual/ja/index.php" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-[70px]">
        <p className="flex w-full md:px-[50px] lg:px-[400px] pt-[50px] pb-[40px] items-center text-[30px] after:h-[3px] after:grow after:bg-border after:ml-[30px] before:h-[3px] before:grow before:bg-border before:mr-[30px]">
          Library or Framework
        </p>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          <SkillCard src="/svg/vue.svg" label="Vue.js" link="https://jp.vuejs.org/index.html" />
          <SkillCard src="/svg/react.svg" label="React.js" link="https://ja.reactjs.org/" />
          <SkillCard src="/svg/nextjs.svg" label="Next.js" link="https://nextjs.org/" />
          <SkillCard src="/svg/laravel.svg" label="Laravel" link="https://laravel.com/" />
          <SkillCard src="/svg/vuetify.svg" label="Vuetify" link="https://vuetifyjs.com/ja/" />
          <SkillCard src="/svg/mui.svg" label="MUI" link="https://mui.com/" />
          <SkillCard src="/svg/tailwind.svg" label="Tailwind.css" link="https://tailwindcss.com/" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-[70px] mb-[190px]">
        <p className="flex w-full md:px-[50px] lg:px-[400px] pt-[50px] pb-[40px] items-center text-[30px] after:h-[3px] after:grow after:bg-border after:ml-[30px] before:h-[3px] before:grow before:bg-border before:mr-[30px]">
          Others
        </p>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          <SkillCard src="/svg/firebase.svg" label="Firebase" link="https://firebase.google.com/" />
          <SkillCard src="/svg/algolia.svg" label="Algolia" link="https://www.algolia.com/" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
