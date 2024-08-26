
import CommonLayout from "./layout/CommonLayout";
import Text from "./text/Text";

const data = [
  { width: 100, title: "HTML", label: "Advance" },
  { width: 100, title: "CSS", label: "Advance" },
  { width: 100, title: "Tailwind", label: "Advance" },
  { width: 90, title: "Java Script", label: "Advance" },
  { width: 80, title: "React Js", label: "Advance" },
  { width: 80, title: "Next Js", label: "Advance" },
];
const Card = ({
  width,
  title,
  label,
}: {
  width: number;
  title: string;
  label: string;
}) => {
  return (
    <div className="flex w-full items-start justify-between mt-6">
      <div className="w-[80%]">
        <Text
          text={title}
          sizeVarient="extraLarge"
          fontVarient="fontSemibold"
          textColor="text-black opacity-70"
          className="text-white"
        />
        <div
          className={`h-3 rounded-full bg-linear-gradient`}
          style={{ width: `${width}%` }}
        />
      </div>
      <div>
        <Text
          text={label}
          sizeVarient="small"
          fontVarient="fontSemibold"
          textColor="text-black opacity-70"
          className="text-white"
        />
      </div>
    </div>
  );
};
const AditionalSkillsPage = () => {
  return (
    <div
      id="section3"
      className="relative bg-white px-4 md:px-8 xl:px-0 min-h-[100vh]"
    >
      <CommonLayout>
        <div className="relative pt-8 pb-10">
          
        </div>
      </CommonLayout>
    </div>
  );
};

export default AditionalSkillsPage;
