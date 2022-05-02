import React from "react";
import { histories } from "../../data";

type HistoryProps = {
  label: string;
  year: string;
  contents: string;
};

const HistoryContent: React.VFC<HistoryProps> = ({ label, contents, year }) => (
  <dd className="relative lg:ml-[60px] border-l-[1px] border-text/[0.5] py-[40px] md:py-[60px] lg:py-[40px] pl-[20px] lg:pl-[50px]">
    <p className="absolute bg-main text-white font-bold text-[17px] top-0 left-[-10px] lg:top-[20px] lg:left-[-100px] px-[20px] py-[3px] rounded">
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

const History: React.FC = () => {
  return (
    <div className="w-full bg-white py-[100px]">
      <div className="w-full md:w-[600px] lg:w-[800px] px-[30px] md:px-0 mx-auto">
        <h2
          data-aos="fade-up"
          className="w-full lg:w-[80%] text-[20px] lg:text-[32px] font-bold mb-[40px] lg:mb-[50px] lg:ml-auto lg:pr-[50px] flex items-center after:h-[1px] after:grow md:after:grow-0 after:bg-main/[0.3] after:ml-[15px] md:after:ml-0 before:h-[1px] md:before:grow before:bg-main/[0.3] md:before:mr-[30px]"
        >
          <span className="text-point-main">H</span>istory
        </h2>
        <p
          data-aos="fade-up"
          className="text-center md:text-right lg:pr-[100px] text-text/[0.7]"
        >
          You can see my main Career, here.
        </p>
        <dl className="px-[15px] lg:px-[30px] w-full mx-auto mt-[40px] md:mt-[100px]">
          {histories.map((date) => (
            <div data-aos="fade-up" key={date.id}>
              <HistoryContent
                label={date.title}
                year={date.year}
                contents={date.contents}
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default History;
