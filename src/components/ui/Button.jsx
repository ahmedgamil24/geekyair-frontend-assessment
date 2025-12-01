import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ text, variant = "primary", className = "" }) => {
  const baseStyle =
    "shadow-[3px_3px_0px_#2E2F35] rounded-[12px] w-[185px] h-[44px] text-[#ffffff] bg-[#FF6D2C] border-2 border-[#2E2F35]";
  const styles = {
    primary: "",
    secondary: "text-[#2E2F35] bg-[#FFFFFF]",
  };
  return (
    <button className={twMerge(baseStyle, styles[variant], className)}>
      {text}
    </button>
  );
};

export default Button;
