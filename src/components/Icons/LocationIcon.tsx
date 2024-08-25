import Image from "next/image";
import GradientBorder from "../GradientBorder";
const LocationIcon = () => {
  return (
    <GradientBorder variant="icon" notRounded>
      <Image
        src="/assets/location.png"
        alt="location"
        className="w-4 h-4"
        width={16}
        height={16}
      />
    </GradientBorder>

  );
};
export default LocationIcon;
