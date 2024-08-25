import React, { FC, HTMLAttributes } from "react";

interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'center' | 'left' | 'right'; 
  className?: string;
}

const CommonLayout: FC<CustomDivProps> = ({ children,variant='left',className, ...props }) => {
  const baseClasses = 'bg-white w-full md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1300px] mx-auto'
  const variantClasses = {
    center: 'text-center',
    left: 'text-left',
    right:'text-right'
  };
  const textClasses = `${baseClasses} ${variantClasses[variant]} ${className ?? ''}`;
  return (
    <section className={textClasses} {...props}>
      {children}
    </section>
  );
};

export default CommonLayout;