import Image from "next/image";
import EmailIcon from "../components/Icons/Email";
import UserIcon from "../components/Icons/UserIcon";
import GradientBorder from "../components/GradientBorder";
import HeadingText from "../components/text/HeadingText";
import Text from "./text/Text";
import LocationIcon from "../components/Icons/LocationIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import CommonLayout from "./layout/CommonLayout";
const HomePage = () => {
  return (
    <div
      id="section1"
      className="bg-custom-purple relative  px-4 md:px-8 xl:px-0"
    >
      <CommonLayout>
        <div className="md:flex md:items-center relative">
          {/* Left Side */}
          <div className="flex justify-center absolute top-16 right-2 md:hidden">
            <div className="relative right-[-64px] top-16 z-10">
              <GradientBorder variant="extraSmall" />
            </div>
            <div className="z-20">
              <GradientBorder variant="small">
                <Image
                  src="/assets/suman_pic.png"
                  alt="my_pic"
                  width={250}
                  height={250}
                  className="rounded-full w-full h-full"
                />
              </GradientBorder>
            </div>
          </div>
          <div className="w-full md:w-[700px] py-16 md:py-32 relative z-20">
            <HeadingText text="Hello, I'm Suman Singh" />
            <br />
            <HeadingText
              text="Sr. Frontend Developer"
              className="text-white text-nowrap mt-2"
            />
            <div className="flex mt-8">
              <LocationIcon />
              <div className="ml-2 w-full">
                <Text
                  text="Address"
                  textColor="text-purple-300"
                  fontVarient="fontSemibold"
                  sizeVarient="large"
                />
                <Text text="Delhi" className="w-[90%] " />
              </div>
            </div>

            <div className="flex mt-4">
              <PhoneIcon />
              <div className="ml-2 w-full">
                <Text
                  fontVarient="fontSemibold"
                  text="Phone"
                  textColor="text-purple-300"
                  sizeVarient="large"
                />
                <a href="tel:7063143519">
                  <Text className="w-[90%]" text="+91-7063143519" />
                </a>
              </div>
            </div>

            <div className="flex mt-4">
              <EmailIcon />
              <div className="ml-2 w-full">
                <Text
                  fontVarient="fontSemibold"
                  text="Email"
                  textColor="text-purple-300"
                  sizeVarient="large"
                />
                <a href="mailto:suman1994singh2010@gmail.com">
                  <Text
                    text="suman1994singh2010@gmail.com"
                    className="w-[90%]"
                    sizeVarient="large"
                  />
                </a>
              </div>
            </div>
            <div className="flex mt-4">
              <UserIcon />
              <div className="ml-2 w-full">
                <Text
                  fontVarient="fontSemibold"
                  text="About"
                  textColor="text-purple-300"
                  sizeVarient="large"
                />

                <Text
                  className="w-[90%]"
                  sizeVarient="large"
                  text="Frontend Developer SDE II | React.js Expert | SaaS Specialist
          🚀 Results-driven Frontend Developer with 5+ years of experience crafting exceptional web experiences."
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:block relative left-[-120px] xl:left-[-200px]">
            <GradientBorder />
            <div className="absolute right-[-100px] top-[-20px] z-20">
              <GradientBorder variant="small">
                <Image
                  src="/assets/suman_pic.png"
                  alt="my_pic"
                  width={250}
                  height={250}
                  className="rounded-full w-[198px] h-[198px]"
                />
              </GradientBorder>
            </div>
            <div className="absolute right-[-120px] top-[150px] z-10">
              <GradientBorder variant="extraSmall" backgroundColor="bg-linear-gradient"/>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};
export default HomePage;
