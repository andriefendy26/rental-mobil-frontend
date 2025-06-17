interface CardProps {
  Logo: string;
  Judul: string;
  Deskripsi: string;
}

export default function Card2({ Logo, Judul, Deskripsi }: CardProps) {
  return (
    <div className="group relative cursor-pointer">
      {/* Main Card */}
      <div className="card2 relative z-10 flex h-[22rem] w-[22rem] flex-col items-center gap-4 rounded-[54px] border border-gray-100 bg-gradient-to-br from-white to-gray-50 px-8 pb-8 pt-6 text-gray-800 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
        {/* Logo Container with Glow Effect */}
        <div className="relative mb-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-30"></div>
          <div className="relative rounded-full bg-white p-4 shadow-lg">
            <img
              src={Logo}
              className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              alt={Judul}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-center text-2xl font-bold leading-tight text-transparent">
          {Judul}
        </h1>

        {/* Description */}
        <p className="flex flex-1 items-center px-2 text-center text-sm leading-relaxed text-gray-600">
          {Deskripsi}
        </p>

        {/* Decorative Elements */}
        <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60"></div>
        <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-40"></div>
      </div>

      {/* Shadow Card with Gradient */}
      <div className="absolute -right-3 top-3 h-[22rem] w-[22rem] rounded-[54px] bg-gradient-to-br from-gray-300 to-gray-400 opacity-60 transition-all duration-300 ease-out group-hover:-right-4 group-hover:top-4"></div>

      {/* Additional Shadow Layer */}
      <div className="absolute -right-1 top-1 h-[22rem] w-[22rem] rounded-[54px] bg-gradient-to-br from-gray-200 to-gray-300 opacity-30 transition-all duration-300 ease-out group-hover:-right-2 group-hover:top-2"></div>
    </div>
  );
}
