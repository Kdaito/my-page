import Image from "next/image";
import TagChip from "../components/TagChip";
import { IoDesktopSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { useCallback } from "react";

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
    <div className="w-[350px] md:w-[600px] lg:w-[1000px] bg-[#222] rounded-lg py-[30px] px-[20px] lg:py-[55px] lg:px-[50px] pb-[60px]">
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
            <a href={githubUrl}>
              <BsGithub className="mx-[20px] text-[50px] lg:hover:text-[60px] duration-200" />
            </a>
            <a href={url}>
              <IoDesktopSharp className="mx-[20px] text-[50px] lg:hover:text-[60px] duration-200" />
            </a>
          </div>
        </div>
        <div className="lg:pl-[40px]">
          <p className="text-center md:text-left md:pl-[40px] text-[20px] md:text-[30px] border-b-[2px] border-[#686868] pb-[7px]">
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
    </div>
  );
};

const Experience: React.VFC = () => {
  return (
    <div className="py-[90px] min-h-[100vh]">
      <div className="pt-[20px] lg:pb-[100px]">
        <p className="text-center text-[22px] md:text-[32px] py-[20px] md:pt-[40px]">
          ポートフォリオ
        </p>
        <div className="flex items-center justify-center flex-col py-[30px]">
          <ExperienceCard
            title="イーストフィールズ株式会社"
            tags={["vue", "react", "firebase", "algolia"]}
            discription="長期インターン生として、大学一年生の頃から現在に至るまで修行中です。長期インターン生として、大学一年生の頃から現在に至るまで修行中です。長期インターン生として、大学一年生の頃から現在に至るまで修行中です。長期インターン生として、大学一年生の頃から現在に至るまで修行中です。長期インターン生として、大学一年生の頃から現在に至るまで修行中です。長期インターン生として、大学一年生の頃から現在に至るまで修行中です。"
            imageSrc="/icon.jpg"
            url="https://qiita.com/shuntaro_tamura/items/99adbe51132e0fb3c9e9"
            githubUrl="https://qiita.com/shuntaro_tamura/items/99adbe51132e0fb3c9e9"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
