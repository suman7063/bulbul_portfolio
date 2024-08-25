import Image from "next/image";
import CommonLayout from "./layout/CommonLayout";
import OtherPageLinks from "../components/text/OtherPageLinks";
import LargeText from "./text/LargeText";
import Button from "./Button/Button";

const HeaderNavbar = ({ notHeaderShadow }: { notHeaderShadow?: boolean }) => {
  return (
    <header>
    <nav className="fixed  top-0 z-30 w-full bg-custom-purple">
      <CommonLayout>
        <div className="flex items-center justify-between px-[5%] py-3 bg-custom-purple">
          <div className="w-[33%]">
            <LargeText text="Home" />
          </div>
          <div className="hidden md:block w-[33%]">
            <ul className="flex space-x-8 py-2">
              <OtherPageLinks />
            </ul>
          </div>
          <div className="w-[33%]">
            <div className="flex justify-end">
              <Button height="32px">Download CV</Button>
            </div>
          </div>
        </div>
      </CommonLayout>
    </nav>
    </header>
  );
};

export default HeaderNavbar;
