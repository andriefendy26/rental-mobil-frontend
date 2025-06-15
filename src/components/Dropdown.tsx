import { FaArrowDown } from "react-icons/fa";

type DropdownProps = {
  icon1: React.ReactNode;
  label: string;
  desc: string;
  options: string[];
  onSelect?: (value: string) => void;
};

export default function Dropdown({
  icon1,
  label,
  desc,
  options,
  onSelect,
}: DropdownProps) {
  return (
    <div className="dropdown dropdown-center w-[180px] rounded-xl border bg-white text-black">
      <div tabIndex={0} role="button" className="flex items-center gap-3 p-2">
        <div>{icon1}</div>
        <div className="text-start">
          <h1 className="text-sm font-bold text-black">{label}</h1>
          <p className="text-xs text-black">{desc}</p>
        </div>
        <FaArrowDown size={18} className="ml-auto text-black" />
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-10 w-52 rounded-box bg-white p-2 text-black shadow"
      >
        {options.map((item, i) => (
          <li key={i}>
            <a onClick={() => onSelect?.(item)}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
