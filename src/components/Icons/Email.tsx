import Image from "next/image";
import GradientBorder from "../GradientBorder";
const EmailIcon = () => {
  return (

      <GradientBorder variant="icon" notRounded>
    <Image
      src="/assets/email.png"
      alt="location"
      className="w-4 h-4"
      width={16}
      height={16}
      
    />
  </GradientBorder>
  );
};
export default EmailIcon;
