import Image from "next/image";
import TagChip from "../components/TagChip";
import { IoDesktopSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { useCallback, useMemo } from "react";
import { products } from "../data";
import GlassCard from "../components/GlassCard";
import Head from "../components/Head";

type ExperienceCardProps = {
  title: string;
  tags: string[];
  discription: string;
  imageSrc: string;
  githubUrl: string;
  url: string;
  reverse?: boolean;
};
const ExperienceCard: React.VFC<ExperienceCardProps> = ({
  title,
  tags,
  discription,
  imageSrc,
  githubUrl,
  url,
  reverse = false,
}) => {
  const onClickUrl = useCallback(
    (src: string) => window.open(src, "_blank"),
    []
  );

  const styleObj = useMemo(
    () => ({
      imagePosition: reverse ? "" : "ml-auto",
      textBlockPosition: reverse ? "right-0" : "left-0",
      titlePosition: reverse ? "lg:text-right" : "text-left",
      linkPosition: reverse ? "lg:justify-end" : "justify-start",
    }),
    [reverse]
  );

  return (
    <div className="relative">
      <div
        className={`relative bg-[#000] lg:bg-point-main overflow-hidden rounded h-[550px] lg:w-[500px] lg:h-[350px] ${styleObj.imagePosition}`}
      >
        <Image
          src={imageSrc}
          layout="fill"
          alt="portfolio"
          objectFit="cover"
          className="opacity-10 lg:opacity-40"
        />
      </div>
      <div
        className={`absolute ${styleObj.textBlockPosition} top-[50%] translate-y-[-50%]`}
      >
        <div
          className={`${styleObj.titlePosition} px-[20px] md:px-[40px] lg:px-0 pb-[10px]`}
        >
          <p className="text-point-main">Portfolio Name</p>
          <p className="text-[32px] tracking-widest">{title}</p>
        </div>
        <div className="lg:bg-[#112340] lg:w-[650px] p-[20px] md:p-[40px] lg:p-[20px] rounded">
          <p className="text-text/[0.7] text-[14px] leading-7 tracking-wider">
            {discription}
          </p>
          <div className="flex items-center justify-start flex-wrap pt-[10px]">
            {tags.map((tag) => (
              <div key={tag}>
                <TagChip label={tag} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex items-center ${styleObj.linkPosition} px-[15px] md:px-[25px] lg:px-0 h-[60px]`}
        >
          <a onClick={() => onClickUrl(githubUrl)}>
            <BsGithub className="mx-[20px] text-[20px] duration-200" />
          </a>
          <a onClick={() => onClickUrl(url)}>
            <IoDesktopSharp className="mx-[20px] text-[20px] duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Experience: React.VFC = () => {
  return (
    <>
      <Head title="products" />
      <div className="h-[100vh] lg:pt-[90px] flex items-center justify-center w-[100%] md:w-[600px] lg:w-[800px] px-[30px] md:px-0 mx-auto">
        <div>
          <h2 className="w-[100%] lg:w-[70%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] flex items-center after:h-[1px] after:grow after:bg-text/[0.3] after:ml-[15px] lg:after:ml-[30px]">
            <span className="text-point-main">P</span>ortfolio
          </h2>
          <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row lg:gap-[40px]">
            <div className="flex-1 tracking-wide leading-8 text-[17px] text-text/[0.8] pt-[60px] md:pt-0">
              <p>
                In this page, I&apos;ll show you some of{" "}
                <span className="text-point-main">my portfolio</span> that I
                have created so far. I deployed most of them, so I whoud like
                you to check them out.
              </p>
              <p className="py-[15px]">
                These portfolio would be introduced in{" "}
                <span className="text-point-main">Japanese</span>, but each of
                them has a link of{" "}
                <span className="text-point-main">git hub</span> and their{" "}
                <span className="text-point-main">page</span>, so please take a
                look at them, if you cannot understand Japanese.
              </p>
            </div>
            <div className="h-[250px] w-[250px] md:h-[300px] md:mt-[40px] lg:mt-0 md:w-[300px] ml-[35px] md:mx-auto lg:ml-0 bg-point-main relative after:w-[250px] md:after:w-[300px] after:h-[250px] md:after:h-[300px] after:absolute after:top-[20px] after:border-[3px] after:border-point-main after:left-[20px] after:z-[-1]">
              <Image
                src="/develop.png"
                alt="profile icon"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px] lg:pt-[100px] pb-[100px]">
        <div className="w-[100%] md:w-[700px] px-[30px] lg:px-0 lg:w-[800px] mx-auto flex items-center justify-center gap-[60px] lg:gap-[150px] flex-col py-[30px]">
          {products.map((product, index) => (
            <div key={product.title} className="w-full">
              <ExperienceCard
                title={product.title}
                tags={product.tags}
                discription={product.discription}
                imageSrc={product.imageSrc}
                url={product.url}
                githubUrl={product.githubUrl}
                reverse={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
