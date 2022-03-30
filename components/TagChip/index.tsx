type Props = {
  label: string;
};

const TagChip: React.VFC<Props> = ({ label }) => (
  <p className="text-[#fff] text-shadow-none inline-block px-[8px] py-[3px] rounded bg-chip mx-[5px] my-[3px] md:text-[12px] md:px-[16px]" style={{textShadow: "none"}}>
    {label}
  </p>
);

export default TagChip;
