import Image from "next/image";
import GradientBorder from "./GradientBorder";
import CommonLayout from "./layout/CommonLayout";
import Text from "./text/Text";
import Button from "./Button/Button";
type CardItem = {
  title: string;
  date: string;
  college: string;
};

const data = [
  {
    title: "Wheelsfly",
    date: "Jun 2024- Present",
    college: "",
  },
  {
    title: "Conscent.ai",
    date: "Nov 2020- Jun 2024",
    college: "",
  },
  {
    title: "Pixean",
    date: "Nov 2018- Nov 2020",
    college: "",
  },
  {
    title: "MCA",
    date: "2015 -  2018",
    college: "NIT Durgapur",
  },
  {
    title: "BCA",
    date: "2011 - 2014",
    college: "Lucknow Univesity",
  },
];
const Card: React.FC<{ item: CardItem }> = ({ item }) => {
  return (
    <div className="flex  w-full flex-nowrap">
      <div className="w-6 pt-[14px] ml-[-2px]  ">
        <div className="bg-linear-gradient w-4 h-4 rounded-full " />
      </div>

      <div className="min-w-[180px] w-full  ml-[-8px]">
        <p className="text-nowrap text-sm text-black opacity-50 pl-2 font-medium">
          {item.date}
        </p>
        <div className="bg-custom-purple w-full h-1" />
        <p className="text-nowrap text-sm text-black pl-2 mt-4">{`${
          item.title
        } ${item.college ? `(${item.college})` : ``}`}</p>
      </div>
    </div>
  );
};
const AboutMe = () => {
  return (
    <div id="section4" className="bg-white relative  px-4 md:px-8 xl:px-0">
      <CommonLayout>
        <div className="relative pt-8 pb-10">
          <Text
            text="About Me"
            sizeVarient="extraTwoLarge"
            fontVarient="fontSemibold"
            textColor="text-black opacity-60"
          />
          <div className="flex w-full items-start justify-between mt-8 overflow-scroll px-2">
            {data.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default AboutMe;
