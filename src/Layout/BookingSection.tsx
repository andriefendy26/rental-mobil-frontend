import Dropdown from "@/components/Dropdown";
import { FaArrowDown, FaCarAlt } from "react-icons/fa";

export const BookingSection = () => {

  return (
    <div className="">
      <BookingSectionComp></BookingSectionComp>
    </div>
  );
};

 const BookingSectionComp = () => {

  return (
    <div className="mx-40 flex justify-center gap-4 rounded-xl bg-[#f8f8f8] py-3 shadow-xl">
      <Dropdown
        icon1={<FaCarAlt size={30}></FaCarAlt>}
        icon2={<FaArrowDown size={20}></FaArrowDown>}
      ></Dropdown>
      <Dropdown
        icon1={<FaCarAlt size={30}></FaCarAlt>}
        icon2={<FaArrowDown size={20}></FaArrowDown>}
      ></Dropdown>
      <Dropdown
        icon1={<FaCarAlt size={30}></FaCarAlt>}
        icon2={<FaArrowDown size={20}></FaArrowDown>}
      ></Dropdown>

    </div>
  );
};


