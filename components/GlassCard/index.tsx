import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = {
  className: string;
  children: React.ReactNode;
};

const GlassCard: React.VFC<Props> = ({ children, className }) => (
  <div className="rounded-[10px] backdrop-blur-md bg-[#738287]/[.25] shadow-[2px_8px_8px_rgba(0,0,0,0.3)] border-[2px] border-[#fff]/[.4] border-b-[#282828]/[.35] border-r-[#282828]/[.35]">
    <div className={className}>{children}</div>
  </div>
);

export default GlassCard;
