import React from "react";
import HeadingText from "../components/text/HeadingText";
import LargeText from "../components/text/LargeText";
import LocationIcon from "../components/Icons/LocationIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import CommonLayoutWithHeader from "../components/layout/CommonLayoutWithHeader";
import EmailIcon from "@/components/Icons/Email";
import UserIcon from "@/components/Icons/UserIcon";
import Image from "next/image";
import GradientBorder from "@/components/GradientBorder";

export default function Home() {
  return (
    <div className="bg-custom-purple">
      <CommonLayoutWithHeader>
        <div
          id="section1"
          className="md:flex md:items-center  xl:px-0 bg-custom-purple relative"
        >
          {/* Left Side */}

          <div className="flex justify-center absolute top-4 right-2 md:hidden">
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
          <div className="w-full md:w-[700px] px-4 md:px-[5%] py-16 relative z-20">
            <HeadingText
              text="Hello, I'm Suman Singh "
              className="bg-gradient-to-r from-[#de11d8] via-[#e34ddf] to-purple-300 inline-block text-transparent bg-clip-text text-nowrap"
            />
            <HeadingText
              text="Frontend Developer"
              className="text-white text-nowrap mt-2"
            />
            <div className="flex mt-8  w-[300px]">
              <LocationIcon />
              <div className="ml-2 w-full">
                <LargeText
                  text="Address"
                  textColor="text-purple-300"
                  fontVarient="fontSemibold"
                />
                <LargeText text="Delhi" className="w-[90%] " />
              </div>
            </div>

            <div className="flex mt-4 w-[300px]">
              <PhoneIcon />
              <div className="ml-2 w-full">
                <LargeText
                  fontVarient="fontSemibold"
                  text="Phone"
                  textColor="text-purple-300"
                />
                <a href="tel:7063143519">
                  <LargeText className="w-[90%]" text="+91-7063143519" />
                </a>
              </div>
            </div>

            <div className="flex mt-4 w-[300px]">
              <EmailIcon />
              <div className="ml-2 w-full">
                <LargeText
                  fontVarient="fontSemibold"
                  text="Email"
                  textColor="text-purple-300"
                />
                <a href="mailto:suman1994singh2010@gmail.com">
                  <LargeText
                    text="suman1994singh2010@gmail.com"
                    className="w-[90%]"
                  />
                </a>
              </div>
            </div>
            <div className="flex mt-4">
              <EmailIcon />
              <div className="ml-2 w-full">
                <LargeText
                  fontVarient="fontSemibold"
                  text="About"
                  textColor="text-purple-300"
                />

                <LargeText
                  className="w-[90%]"
                  text="Frontend Developer SDE II | React.js Expert | SaaS Specialist
                🚀 Results-driven Frontend Developer with 5+ years of experience crafting exceptional web experiences."
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:block  relative left-[-200px]">
            <GradientBorder notBackground />
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
              <GradientBorder variant="extraSmall" />
            </div>
          </div>
        </div>
        <div id="section2" className="h-[1000px] bg-red-400 w-[500px]"></div>
      </CommonLayoutWithHeader>
    </div>
  );
}
