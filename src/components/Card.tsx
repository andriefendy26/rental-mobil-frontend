interface CardProps {
  Logo: string;
  Deskripsi: React.ReactNode;
}

export default function Card({ Logo, Deskripsi }: CardProps) {
  const newLocal = "absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100";
  return (
    <div className="group relative w-full cursor-pointer md:h-64 md:w-64 lg:w-60">
      {/* Main Card */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[64px] border border-red-700/20 bg-gradient-to-br from-red-800 via-red-900 to-red-950 px-8 py-6 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-red-900/30">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute right-4 top-4 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-white/5 blur-2xl"></div>
        </div> */}

        {/* Logo Container */}
        <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
          <div className={newLocal}></div>
          <div className="relative rounded-3xl p-4">
            <img
              src={Logo}
              className="h-auto w-32 object-contain drop-shadow-lg transition-all duration-300"
              alt="Logo"
            />
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 text-center text-sm font-medium leading-relaxed text-white">
          {Deskripsi}
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute left-6 top-6 h-2 w-2 animate-pulse rounded-full bg-white/40"></div> */}
        {/* <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-white/30"></div> */}
        {/* <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-gradient-to-r from-red-400 to-pink-400 opacity-60"></div> */}

        {/* Shine Effect */}
        {/* <div className="absolute inset-0 translate-x-[-100%] rounded-[64px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:translate-x-[100%] group-hover:opacity-100 group-hover:transition-transform group-hover:duration-700"></div> */}
      </div>

      {/* Shadow Layers */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[64px] bg-red-900/40 blur-sm transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[64px] bg-red-800/20 blur-lg"></div>
    </div>
  );
}
