"use client"
import LargeText from "./LargeText";
const OtherPageLinks = ({ isFooter }: { isFooter?: boolean }) => {
  const handleScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  return (
    <>
      <li onClick={()=>{handleScroll('section1')}}>
       
          <LargeText
            text="Projects"
            textColor="text-white"
          />

      </li>
      <li onClick={()=>{handleScroll('section2')}}>
        <LargeText
          text="Technologies"
          textColor="text-white"
        />
      </li>
      <li>

          <LargeText
            text="About Me"
            textColor="text-white"

          />
      </li>
    </>
  );
};
export default OtherPageLinks;
