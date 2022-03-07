import { useRouter } from "next/router";
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
        className="text-[22px] px-[15px] py-[5px] after:absolute after:bottom-[-4px] after:left-[0] after:content-[''] after:w-[100%] after:h-[2px] after:bg-text after:origin-center after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-center"
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
    () => (isDrawerOpen ? "top-[90px]" : "top-[-2000px]"),
    [isDrawerOpen]
  );

  return (
    <>
      <div className="fixed z-[9999] backdrop-blur-md bg-[#738287]/[.25] shadow-[2px_8px_8px_rgba(0,0,0,0.3)] w-full h-[90px]">
        <div className="h-full w-[80%] max-w-[1280px] mx-auto flex items-center justify-between">
          <button className="px-[15px] py-[5px]">
            <h1 className="text-[32px] font-medium">Kobayashi</h1>
          </button>
          <div className="hidden w-[500px] lg:flex items-center justify-between">
            <HeaderButton path="/">Profile</HeaderButton>
            <HeaderButton path="/skills">Skills</HeaderButton>
            <HeaderButton path="/experience">Experience</HeaderButton>
            <HeaderButton path="/products">Products</HeaderButton>
          </div>
          <button
            className="border border-humberger lg:hidden w-[68px] h-[50px] rounded-md flex items-center justify-between flex-col py-[9px] px-[9px]"
            onClick={() => toggleModal()}
          >
            <div className="w-[90%] h-[4px] bg-humberger" />
            <div className="w-[90%] h-[4px] bg-humberger" />
            <div className="w-[90%] h-[4px] bg-humberger" />
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
            Profile
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/skills")}
          >
            Skills
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/experience")}
          >
            Experience
          </button>
          <button
            className="text-[32px] w-full py-[20px]"
            onClick={() => onClickDrawer("/products")}
          >
            Products
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
