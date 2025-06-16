
type DatepickerProps = {
  icon1: React.ReactNode;
  label: string;
  //   desc: string;
  // onSelect?: (value: string) => void;
};

export default function DatepickerCustm({
  icon1,
  label,
  // onSelect,
}: DatepickerProps) {
  return (
    <div className="flex w-56 items-center gap-3">
      <div className="">{icon1}</div>
      <div className="flex flex-col px-1">
        <label className=" text-sm font-bold">{label}</label>
        <input type="date" className="bg-transparent focus:outline-none" />
      </div>
    </div>
  );
}
