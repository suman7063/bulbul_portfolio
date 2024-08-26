"use client"
import LargeText from "./Text";
const OtherPageLinks = ({ isFooter }: { isFooter?: boolean }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 68;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <li onClick={()=>{handleScroll('section2')}}>
       
          <LargeText
            text="Projects"
            textColor="text-white"
          />

      </li>
      <li onClick={()=>{handleScroll('section3')}}>
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
