type DropdownProps = {
  icon1: React.ReactNode;
  label: string;
  desc: string;
  options: string[];
  // onSelect?: (value: string) => void;
};

export default function Dropdown({
  icon1,
  label,
  desc,
  options,
  // onSelect,
}: DropdownProps) {
  return (
    <div className="flex items-center gap-3 w-56">
      <div className="">
        {icon1}
      </div>
      <div className="flex flex-col ">
        <label className="text-sm font-bold px-1">{label}</label>
        <select name="" id="" defaultValue={desc} className="bg-transparent p-0 m-0">
        <option className="z-[9999]" disabled={true}>{desc}</option>
          {options.map((item, i) => (
            <option key={i} className="" >{item}</option>
          ))} 
        </select>
      </div>
    </div>
  );
}
