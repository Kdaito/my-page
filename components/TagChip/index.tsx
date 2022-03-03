type Props = {
  label: string;
};

const TagChip: React.VFC<Props> = ({ label }) => (
  <p className="inline-block px-[8px] py-[3px] rounded-[50px] bg-[#555] mx-[5px] my-[3px] md:text-[20px] md:px-[16px]">
    {label}
  </p>
);

export default TagChip;
