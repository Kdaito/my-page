import Image from "next/image";
import TagChip from "../components/TagChip";
import { IoDesktopSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { useCallback } from "react";
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
};
const ExperienceCard: React.VFC<ExperienceCardProps> = ({
  title,
  tags,
  discription,
  imageSrc,
  githubUrl,
  url,
}) => {
  const onClickUrl = useCallback(
    (src: string) => window.open(src, "_blank"),
    []
  );

  return (
    <GlassCard className="w-[350px] md:w-[600px] lg:w-[1000px] py-[30px] px-[20px] lg:py-[55px] lg:px-[50px] pb-[60px]">
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <div>
          <div className="relative w-[250px] h-[250px] mb-[20px]">
            <Image
              src={imageSrc}
              layout="fill"
              alt="portfolio"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-center pb-[20px] lg:pt-[20px] h-[60px]">
            <a onClick={() => onClickUrl(githubUrl)}>
              <BsGithub className="mx-[20px] text-[50px] lg:hover:text-[60px] duration-200" />
            </a>
            <a onClick={() => onClickUrl(url)}>
              <IoDesktopSharp className="mx-[20px] text-[50px] lg:hover:text-[60px] duration-200" />
            </a>
          </div>
        </div>
        <div className="lg:pl-[40px]">
          <p className="text-center md:text-left md:pl-[40px] text-[20px] md:text-[30px] border-b-[2px] border-border pb-[7px]">
            {title}
          </p>
          <p className="py-[20px] text-[17px] leading-8 tracking-wider md:px-[20px]">
            {discription}
          </p>
          <div className="flex items-center justify-start flex-wrap">
            {tags.map((tag) => (
              <div key={tag}>
                <TagChip label={tag} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

const Experience: React.VFC = () => {
  return (
    <>
      <Head title="products" />
      <div className="py-[90px] min-h-[100vh]">
        <div className="pt-[20px] lg:pb-[100px]">
          <p className="text-center text-[22px] md:text-[32px] py-[20px] md:pt-[40px] relative z-10">
            ポートフォリオ
          </p>
          <div className="flex items-center justify-center gap-[100px] flex-col py-[30px]">
            {products.map((product) => (
              <div key={product.title}>
                <ExperienceCard
                  title={product.title}
                  tags={product.tags}
                  discription={product.discription}
                  imageSrc={product.imageSrc}
                  url={product.url}
                  githubUrl={product.githubUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
