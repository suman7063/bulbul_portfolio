import React, { FC, HTMLAttributes } from "react";
import HeaderNavbar from "../HeaderNavbar";
import CommonLayout from "./CommonLayout";

interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "center" | "left" | "right";
  className?: string;
  refreshPage?: boolean; // that is required when we select city from city modal
  setRefreshPage?: any;
  notHeaderShadow?: boolean;
}

const CommonLayoutWithHeader: FC<CustomDivProps> = ({
  children,
  variant = "left",
  className,
  refreshPage,
  setRefreshPage,
  notHeaderShadow,
}) => {
  const baseClasses = "";
  const variantClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };
  const textClasses = `${baseClasses} ${variantClasses[variant]} ${
    className ?? ""
  }`;
  return (
    <>
      <HeaderNavbar
        notHeaderShadow={notHeaderShadow}
      />
      <CommonLayout className="mt-[56px] md:mt-[55px]">
        {children}
      </CommonLayout>
    </>
  );
};

export default CommonLayoutWithHeader;
