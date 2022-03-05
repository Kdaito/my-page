import TagChip from "../components/TagChip";

type ExperienceCardProps = {
  companyName: string;
  tags: string[];
  discription: string;
  startDate: string;
  endDate: string | null;
};
const ExperienceCard: React.VFC<ExperienceCardProps> = ({
  companyName,
  tags,
  discription,
  startDate,
  endDate,
}) => {
  return (
    <div className="w-[350px] md:w-[600px] lg:w-[1000px] bg-card rounded-lg py-[30px] px-[20px] lg:py-[55px] lg:px-[30px]">
      <p className="text-center md:text-left md:pl-[40px] text-[20px] md:text-[30px] border-b-[2px] border-border pb-[7px]">
        {companyName}
      </p>
      <p className="py-[20px] text-[17px] leading-8 tracking-wider">
        {discription}
      </p>
      <div className="flex items-center justify-start flex-wrap">
        {tags.map((tag) => (
          <div key={tag}>
            <TagChip label={tag} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[20px] lg:justify-start lg:pl-[30px]">
        <p className="md:text-[20px]">{startDate}</p>
        <p className="mx-[15px]">〜</p>
        <p className="md:text-[20px]">{endDate || "現在"}</p>
      </div>
    </div>
  );
};

const Experience: React.VFC = () => {
  return (
    <div className="pt-[90px] min-h-[100vh]">
      <div className="pt-[20px] lg:pb-[100px]">
        <p className="text-center text-[22px] md:text-[32px] py-[20px] md:pt-[40px]">
          インターン実績
        </p>
        <div className="flex items-center justify-center flex-col py-[30px]">
          <ExperienceCard
            companyName="イーストフィールズ株式会社"
            tags={["Vue.js", "React.js", "Next.js", "Tailwind.css", "Firebase", "Algolia"]}
            discription="長期インターン生として、大学一年生の頃から現在に至るまで修行中です。Vue.jsとFirebaseを使用したマッチングプラットフォーム開発や、React.jsとFirebaseを使用した人材管理アプリ開発に携わっております。また、最近ではNext.jsを使用したテックブログの作成に参画しております。"
            startDate="2021-05-25"
            endDate={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
