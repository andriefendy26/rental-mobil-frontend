
interface ButtonProps {
  color: "black" | "blackW" | "blue" | "white" | "maron" | "green";
  onclick: () => void;
  children: React.ReactNode;
  isAnimating?: boolean;
}

export function Button({ color, onclick, children, isAnimating }: ButtonProps) {
  const colors = {
    black: "bg-black text-white hover:bg-gray-800",
    blackW: "bg-white text-black hover:bg-gray-100",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    white: "bg-white text-black hover:bg-gray-100",
    maron: "bg-[#800000] text-white hover:bg-[#600000]",
    green:
      "border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white",
  };

  return (
    <button
      className={`${colors[color]} md:text-md rounded-lg px-4 py-2 font-sans text-sm font-medium shadow transition-all duration-300 ease-in-out md:px-6 md:py-3 ${
        isAnimating ? "translate-x-4" : ""
      } hover:scale-105`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
