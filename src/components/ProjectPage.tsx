import Image from "next/image";
import GradientBorder from "./GradientBorder";
import CommonLayout from "./layout/CommonLayout";
import Text from "./text/Text";
import Button from "./Button/Button";
type CardItem = {
  title: string;
  description: string;
  img: string;
  gitLink: string;
  previewLink: string;
  showGit: boolean;
};

const data = [
  {
    title: "Wheelsfly",
    description: `Designed and  collection.This was achieved using React and NextJs`,
    img: "/assets/project/wheelsFly.png",
    gitLink: "",
    previewLink: "https://www.wheelsfly.in/",
    showGit: false,
  },
  {
    title: "Conscent.ai",
    description: `Designed and  collection.This was achieved using React and NextJs`,
    img: "/assets/project/conscent.png",
    gitLink: "",
    previewLink: "https://conscent.ai/",
    showGit: false,
  },
  {
    title: "StillsWeb",
    description: `Designed and  collection.This was achieved using React and NextJs`,
    img: "/assets/project/stillWeb.png",
    gitLink: "",
    previewLink: "https://stillsweb.com/home",
    showGit: false,
  },
  {
    title: "Click Film",
    description: `Designed and  collection.This was achieved using React and NextJs`,
    img: "/assets/project/clickFilm.png",
    gitLink: "",
    previewLink: "https://lustrous-puppy-594c37.netlify.app/",
    showGit: true,
  },
  {
    title: "Finance Tracker",
    description: "",
    img: "/assets/project/finance_tracker.png",
    gitLink: "",
    previewLink: "https://dailyfinancetracker.netlify.app/",
    showGit: true,
  },
];
const Card: React.FC<{ item: CardItem }> = ({ item }) => {
  return (
    <GradientBorder notRounded variant="auto">
      <div className="p-4 w-full">
        <Image
          src={item.img}
          alt="my_pic"
          width={400}
          height={400}
          className="w-full h-[200px]"
          priority={false}
        />
        <Text
          text={item.title}
          sizeVarient="large"
          fontVarient="fontSemibold"
          className="mt-4"
        />
        <Text text={item.description} sizeVarient="small" textColor="text-gray-400" />

        <div className="flex  justify-center mt-4">
          <Button><a href={item.previewLink} target="_blank" rel="noopener noreferrer">Live Preview</a></Button>
          {item.showGit && (
            <Button variant="secondary" className="ml-4">
              Git Link
            </Button>
          )}
        </div>
      </div>
    </GradientBorder>
  );
};
const ProjectPage = () => {
  return (
    <div
      id="section2"
      className="bg-white relative  px-4 md:px-8 xl:px-0 min-h-[100vh]"
    >
      <CommonLayout>
        <div className="relative pt-8 pb-10">
          <Text
            text="Projects"
            sizeVarient="extraTwoLarge"
            fontVarient="fontSemibold"
            textColor="text-black opacity-60"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {data.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default ProjectPage;
