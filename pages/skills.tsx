import Image from "next/image";
import { useRouter } from "next/router";
import GlassCard from "../components/GlassCard";
import Head from "../components/Head";

type SkillCardProps = {
  src: string;
  label: string;
  link: string;
  discription: string;
};

const SkillCard: React.VFC<SkillCardProps> = ({
  src,
  label,
  link,
  discription,
}) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(link)}>
      <div className="relative w-full h-[310px] bg-card rounded-[20px] px-[20px] py-[40px] lg:hover:scale-105 duration-200">
        <div className="absolute top-[-60px] bg-card p-[10px] rounded-[50%] border-[15px] border-main">
          <div className="relative overflow-hidden rounded-[50%] w-[60px] h-[60px]">
            <Image src={src} alt="language icon" layout="fill" />
          </div>
        </div>
        <p className="text-right pt-[10px] text-text/[0.7] text-[24px]">
          {label}
        </p>
        <p className="text-left text-text/[0.5] mt-[10px] pt-[20px] border-t break-words">
          {discription}
        </p>
      </div>
    </button>
  );
};
const Skills: React.VFC = () => {
  return (
    <>
      <Head title="skills" />
      <div className="pt-[90px] min-h-[100vh]">
        <div className="w-[350px] md:w-[600px] px-[30px] lg:w-[800px] mx-auto py-[100px]">
          <h2 className="mx-auto lg:w-[70%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] flex items-center after:h-[1px] after:grow after:bg-text/[0.3] after:ml-[15px] lg:after:ml-[30px]">
            <span className="text-point-main">L</span>anguage
          </h2>
          <div className="pt-[50px] grid gap-x-[30px] gap-y-[80px] md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              src="/svg/javascript.svg"
              label="Javascript"
              link="https://developer.mozilla.org/ja/docs/Web/JavaScript"
              discription="JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."
            />
            <SkillCard
              src="/svg/typescript.svg"
              label="Typescript"
              link="https://www.typescriptlang.org/"
              discription="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            />
            <SkillCard
              src="/svg/php.svg"
              label="php"
              link="https://www.php.net/manual/ja/index.php"
              discription="PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML."
            />
          </div>
        </div>
        <div className="w-[350px] md:w-[600px] px-[30px] lg:w-[800px] mx-auto py-[100px]">
          <h2 className="mx-auto lg:w-[80%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] lg:ml-auto lg:pr-[50px] flex items-center after:h-[1px] after:grow md:after:grow-0 after:bg-text/[0.3] after:ml-[15px] md:after:ml-0 before:h-[1px] md:before:grow before:bg-text/[0.3] md:before:mr-[30px]">
            <span className="text-point-main">L</span>ibrary or
            <span className="text-point-main pl-[10px]">F</span>lamework
          </h2>
          <div className="pt-[50px] grid gap-x-[30px] gap-y-[80px] md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              src="/svg/vue.svg"
              label="Vue.js"
              link="https://jp.vuejs.org/index.html"
              discription="Vue is a Javascript-based progressive framework for building user interfaces."
            />
            <SkillCard
              src="/svg/react.svg"
              label="React.js"
              link="https://ja.reactjs.org/"
              discription="React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. "
            />
            <SkillCard
              src="/svg/nextjs.svg"
              label="Next.js"
              link="https://nextjs.org/"
              discription="Next.js is a flexible React framework that gives you building blocks to create fast web applications."
            />
            <SkillCard
              src="/svg/laravel.svg"
              label="Laravel"
              link="https://laravel.com/"
              discription="Laravel is a web application framework with expressive, elegant syntax. Laravel provides a structure and starting point for creating your application,"
            />
            <SkillCard
              src="/svg/vuetify.svg"
              label="Vuetify"
              link="https://vuetifyjs.com/ja/"
              discription="Vuetify is a Vue UI Library with beautifully handcrafted Material Components."
            />
            <SkillCard
              src="/svg/mui.svg"
              label="MUI"
              link="https://mui.com/"
              discription="MUI is a React UI Library. MUI provides a robust, customizable, and accessible library of foundational and advanced components. "
            />
            <SkillCard
              src="/svg/tailwind.svg"
              label="Tailwind.css"
              link="https://tailwindcss.com/"
              discription="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
            />
          </div>
        </div>
        <div className="w-[350px] md:w-[600px] px-[30px] lg:w-[800px] mx-auto py-[100px]">
          <h2 className="mx-auto lg:w-[70%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] flex items-center after:h-[1px] after:grow after:bg-text/[0.3] after:ml-[15px] lg:after:ml-[30px]">
            <span className="text-point-main">O</span>thers
          </h2>
          <div className="pt-[50px] grid gap-x-[30px] gap-y-[80px] md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              src="/svg/firebase.svg"
              label="Firebase"
              link="https://firebase.google.com/"
              discription="Firebase helps you build and run successful apps. Firebase is backed by Google and loved by app development teams - from startups to global enterprises"
            />
            <SkillCard
              src="/svg/algolia.svg"
              label="Algolia"
              link="https://www.algolia.com/"
              discription="Algolia empowers Builders with the Search and Recommendation services they need to build world-class experiences."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
