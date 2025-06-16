import React from "react";

interface ButtonProps {
  color: "black" | "blackW" | "blue" | "white" | "maron" | "green";
  onclick: () => void;
  children: React.ReactNode;
}

export function Button({ color, onclick, children }: ButtonProps) {
  const colors = {
    black: "bg-black text-white",
    blackW: "bg-white text-black",
    blue: "bg-blue-500 text-white",
    white: "bg-white text-black",
    maron: "bg-[#800000] text-white",
    green: "border border-[#800000] text-[#800000]",
  };

  return (
    <button
      className={`${colors[color]} rounded-lg font-sans text-md font-medium shadow lg:px-7 lg:py-3`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
