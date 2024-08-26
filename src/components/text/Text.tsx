import React from "react";
interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  variant?: 'center' | 'left' | 'right'; 
  fontVarient?: 'fontLight' | 'fontSemibold' | 'fontNormal'; 
  sizeVarient?:'extraLarge' | 'large' | 'small' |'extraTwoLarge'; 
  className?: string;
  textColor?:string
}

const Text: React.FC<TextProps> = ({ text,variant='left',className,textColor = 'text-gray-300',fontVarient='fontLight',sizeVarient='large', ...props }) => {
  const baseClasses = `font-noto  w-full opacity-90 ${textColor}`
  const variantClasses = {
    center: 'text-center',
    left: 'text-left',
    right:'text-right'
  };
  const fontVarientClasses = {
    fontLight: 'font-light',
    fontSemibold: 'font-semibold',
    fontNormal:'font-normal'
  };

  const sizeVarientClasses = {
    extraTwoLarge: 'text-lg md:text-xl xl:text-2xl',
    extraLarge: 'text-base lg:text-lg xl:text-xl',
    large: 'text-sm lg:text-base xl:text-lg',
    small: 'text-xs lg:text-sm xl:text-base',
  };
  const textClasses = `${baseClasses} ${variantClasses[variant]} ${fontVarientClasses[fontVarient]} ${sizeVarientClasses[sizeVarient]} ${className ?? ''}`;
  return (
    <h2 className={textClasses} {...props}>
      {text}
    </h2>
  );
};

export default Text;