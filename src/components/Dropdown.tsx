type DropdownProps = {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
};

export default function Dropdown({ icon1, icon2 }: DropdownProps) {
  return (
    <div className="dropdown dropdown-center rounded-xl border bg-white">
      <div tabIndex={0} role="button" className="flex items-center gap-3 p-2">
        {icon1}
        <div className="text-start">
          <h1 className="text-lg font-bold">Layanan</h1>
          <p className="text-sm">Pilih jenis Layanan</p>
        </div>
        {icon2}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
