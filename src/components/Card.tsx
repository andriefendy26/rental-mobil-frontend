interface CardProps {
  Logo: string;
  Deskripsi: React.ReactNode;
}

export default function Card({ Logo, Deskripsi }: CardProps) {
  return (
    <div className="w-full md:h-64 md:w-64 lg:w-60 rounded-[64px] bg-[#800000] flex flex-col items-center justify-center py-4 px-10">
      <img src={Logo} className="w-40"></img>
      <p className="text-white text-center">{Deskripsi}</p>
    </div>
  );
}
