import { useRouter } from "next/router";
import Script from "next/script";
import { useCallback, useMemo, useState } from "react";

type HeaderButton = {
  path: string;
  children: React.ReactNode;
};

const HeaderButton: React.VFC<HeaderButton> = ({ path, children }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <button
        className="text-[22px] px-[15px] py-[5px] after:absolute after:bottom-[-4px] after:left-[0] after:content-[''] after:w-[100%] after:h-[1px] after:bg-text/[0.5] after:origin-center after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-center"
        onClick={() => router.push(`${path}`)}
      >
        {children}
      </button>
    </div>
  );
};

const Header: React.VFC = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  const onClickDrawer = useCallback(
    (path: string) => {
      setIsDrawerOpen(false);
      router.push(path);
    },
    [router]
  );

  const drawerScale = useMemo(
    () => (isDrawerOpen ? "top-[60px] md:top-[90px]" : "top-[-2000px]"),
    [isDrawerOpen]
  );

  return (
    <>
      <div className="fixed z-[9999] backdrop-blur-md background-header w-full h-[60px] md:h-[90px]">
        <div className="h-full w-full md:w-[80%] px-[30px] max-w-[1280px] mx-auto flex items-center justify-between">
          <h1 className="text-[26px] md:text-[32px] font-medium">K.Hiroto</h1>
          <div className="hidden w-[500px] lg:flex items-center justify-between">
            <HeaderButton path="/">
              <span className="text-point-main">P</span>rofile
            </HeaderButton>
            <HeaderButton path="/skills">
              <span className="text-point-main">S</span>kills
            </HeaderButton>
            <HeaderButton path="/experience">
              <span className="text-point-main">E</span>xperience
            </HeaderButton>
            <HeaderButton path="/products">
              <span className="text-point-main">P</span>ortfolio
            </HeaderButton>
          </div>
          <button
            className="border border-humberger lg:hidden w-[48px] h-[40px] rounded-md flex items-center justify-between flex-col py-[9px] px-[9px]"
            onClick={() => toggleModal()}
          >
            <div className="w-[90%] h-[2px] bg-humberger" />
            <div className="w-[90%] h-[2px] bg-humberger" />
            <div className="w-[90%] h-[2px] bg-humberger" />
          </button>
        </div>
      </div>
      <div
        className={`z-[999] fixed left-0 w-full h-screen ${drawerScale} origin-center duration-500`}
      >
        <div className="backdrop-blur-md bg-[#738287]/[.25] shadow-[2px_8px_8px_rgba(0,0,0,0.3)] w-full h-[500px] flex items-center justify-between flex-col py-[50px]">
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/")}
          >
            <span className="text-point-main">P</span>rofile
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/skills")}
          >
            <span className="text-point-main">S</span>kills
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/experience")}
          >
            <span className="text-point-main">E</span>xperience
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/products")}
          >
            <span className="text-point-main">P</span>ortfolio
          </button>
        </div>
        <button
          className="w-full h-full bg-[#000]/[.4] backdrop-blur-md"
          onClick={() => onCloseDrawer()}
        />
      </div>
    </>
  );
};

export default Header;
