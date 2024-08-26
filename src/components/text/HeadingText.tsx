import React from "react";
interface HeadingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  variant?: 'center' | 'left' | 'right'; 
  className?: string;
}
const HeadingText: React.FC<HeadingTextProps> = ({ text,variant='left',className, ...props }) => {
  const baseClasses = 'font-poppins text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#de11d8] via-[#e34ddf] to-purple-300 inline-block text-transparent bg-clip-text text-nowrap'
  const variantClasses = {
    center: 'text-center',
    left: 'text-left',
    right:'text-right'
  };
  const textClasses = `${baseClasses} ${variantClasses[variant]} ${className ?? ''}`;
  return (
    <h2 className={textClasses} {...props}>
      {text}
    </h2>
  );
};

export default HeadingText;