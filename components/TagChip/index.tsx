type Props = {
  label: string;
};

const TagChip: React.VFC<Props> = ({ label }) => (
  <p className="text-[#fff] text-shadow-none inline-block px-[8px] py-[3px] rounded-[50px] bg-chip mx-[5px] my-[3px] md:text-[20px] md:px-[16px]" style={{textShadow: "none"}}>
    {label}
  </p>
);

export default TagChip;
