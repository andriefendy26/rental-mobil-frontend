interface CardProps {
  Logo: string;
  Judul: string;
  Deskripsi: string;
}

export default function Card2({ Logo, Judul, Deskripsi }: CardProps) {
  return (
    <div className="relative">
      <div className="card2 relative z-10 flex h-[22rem] w-[22rem] flex-col items-center gap-3 rounded-[54px] bg-[#eceded] px-10 pb-6 pt-2 text-black">
        <img src={Logo} className="w-32"></img>
        <h1 className="text-2xl font-bold">{Judul}</h1>
        <p className="text-md">{Deskripsi}</p>
      </div>
      <div className="card2 absolute -right-3 top-3 flex h-[22rem] w-[22rem] flex-col items-center gap-3 rounded-[54px] bg-[#a7aaad] px-10 pb-6 pt-2 text-black"></div>
    </div>
  );
}
