import React, { FC, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  baseClasses?: "left" | "right" | "center"; // Add baseClasses prop
  variant?: "primary" | "secondary" |"transparent" |"danger"; // Add variant prop
  disableBtn?: boolean;
  className?: string;
  isActive?: boolean;
  scale?:"scale-105"|"scale-0"
}

const Button: FC<CustomButtonProps> = ({
  children,
  baseClasses="center",
  variant = "primary",
  scale="scale-105",
  className,
  disableBtn,
  isActive,
  ...props
}) => {
  const baseClassesCommon = `rounded-lg cursor-pointer whitespace-nowrap px-2  flex items-center duration-300 ease-in-out transform ${disableBtn?"opacity-60 cursor-not-allowed":"cursor-pointer"}`
  const baseClassesVarient = {
    left:`${baseClassesCommon} justify-left`,
    right:`${baseClassesCommon} justify-right`,
    center:`${baseClassesCommon} justify-center`
  };
  const variantClassesCommon =  `shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded focus:outline-none font-medium`
  const variantClasses = {
    primary:
    `${variantClassesCommon} bg-linear-gradient text-white ${
      isActive ? "bg-linear-gradient-hover hover:bg-linear-gradient-hover" : "hover:bg-linear-gradient-hover"
    }`,
      // `${variantClassesCommon} bg-linear-gradient active:bg-gradient-to-br hover:bg-gradient-to-br shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-white`,
    secondary: `${variantClassesCommon} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    danger:`${variantClassesCommon} text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br`,
    transparent: `${variantClassesCommon} bg-transparent text-black ${
      isActive ? "bg-gradient-to-br from-blue-500 via-blue-700 to-blue-800 text-gray-100" : "hover:bg-gradient-to-br from-blue-400 via-blue-600 to-blue-700 hover:text-white"
    }`,
  };

  const scaleClasses = {
    "scale-105": "hover:scale-105",
    "scale-0": "hover:scale-none",
  }
 // Responsive classes for height and width
 const responsiveClasses = 'h-[28px] w-[100px] md:h-10 md:w-[200px] text-xs md:text-base';
  const buttonClasses = `${baseClassesVarient[baseClasses]} ${variantClasses[variant]} ${className} ${scaleClasses[scale]}   ${responsiveClasses}`;

  return (
    <button className={buttonClasses} {...props} disabled={disableBtn} type="button">
      {children}
    </button>
  );
};

export default Button;
