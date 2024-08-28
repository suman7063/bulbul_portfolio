import CommonLayout from "./layout/CommonLayout";
import Text from "./text/Text";

const data = [
  { width: 80, title: "React Js", label: "Advance" },
  { width: 80, title: "Next Js", label: "Advance" },
  { width: 90, title: "Java Script", label: "Expert" },
  { width: 100, title: "HTML", label: "Expert" },
  { width: 100, title: "CSS", label: "Expert" },
  { width: 100, title: "Tailwind", label: "Expert" },
  { width: 100, title: "SASS", label: "Expert" },
 
];
const aditionalData = ["Git", "Teamwork", "Quick Learning"];
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
        <Text text={title} sizeVarient="large"/>
        <div
          className={`h-2 rounded-full bg-linear-gradient`}
          style={{ width: `${width}%` }}
        />
      </div>
      <div>
        <Text text={label} sizeVarient="small" />
      </div>
    </div>
  );
};
const TechnologiesPage = () => {
  return (
    <div
      id="section3"
      className="relative bg-custom-purple px-4 md:px-8 xl:px-0 flex  py-16 "
    >
      <CommonLayout>
        <div className="relative">
          <Text
            text="Technologies"
            sizeVarient="extraTwoLarge"
            fontVarient="fontSemibold"
            textColor="text-white"
          />
          {data.map((item, index) => {
            return (
              <Card
                width={item.width}
                title={item.title}
                label={item.label}
                key={index}
              />
            );
          })}
          <Text
            text="Aditional Technologies & Skills"
            sizeVarient="extraTwoLarge"
            fontVarient="fontSemibold"
            textColor="text-white"
            className="mt-16"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
            {aditionalData.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <div className="w-4 h-4 bg-linear-gradient rounded-full " />
                  <Text
                    text={item}
                    sizeVarient="large"
                    className="ml-1"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default TechnologiesPage;
