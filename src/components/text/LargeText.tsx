import React from "react";
interface LargeTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  variant?: 'center' | 'left' | 'right'; 
  fontVarient?: 'fontLight' | 'fontSemibold' | 'fontNormal'; 
  className?: string;
  textColor?:string
}

const LargeText: React.FC<LargeTextProps> = ({ text,variant='left',className,textColor = 'text-gray-300',fontVarient='fontLight', ...props }) => {
  const baseClasses = `font-noto text-sm xl:text-base   w-full opacity-90 ${textColor}`
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
  const textClasses = `${baseClasses} ${variantClasses[variant]} ${fontVarientClasses[fontVarient]} ${className ?? ''}`;
  return (
    <h2 className={textClasses} {...props}>
      {text}
    </h2>
  );
};

export default LargeText;