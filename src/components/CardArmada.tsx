interface CardArmadaProps {
  judul: string;
  image: string;
  price: number;
  transmisi : string;
  bahanbakar : string;
  warna : string;
  kapasitas : string;
}

export default function CardArmada({ judul, image, price, transmisi, bahanbakar, warna, kapasitas }: CardArmadaProps) {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  });
  const formatted = IDR.format(price);
  const lastDotIndex = formatted.lastIndexOf(".");
  const head =
    lastDotIndex !== -1 ? formatted.slice(0, lastDotIndex) : formatted;
  const tail = lastDotIndex !== -1 ? formatted.slice(lastDotIndex) : "";

  return (
    <div className="transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-gray-100/40 to-gray-200/100 pb-2 pt-3">
        <div className="flex flex-col items-center">
          <h1 className="mb-2 px-4 text-center text-2xl font-bold text-gray-800">
            {judul}
          </h1>
          <div className="relative">
            <img
              src={image}
              alt={judul}
              className="h-52 w-60 object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-[#800000] to-[#600000] text-white">
        {/* Price Section */}
        <div className="border-b border-white/20 px-6 py-3 text-center">
          <div>
            <h2 className="text-4xl font-bold leading-none lg:text-5xl">
              {head}
              {tail && (
                <span className="text-lg font-medium opacity-80">{tail}</span>
              )}
              <span className="ml-2 font-medium">IDR</span>
            </h2>
            <p className="mt-1 text-lg text-white/80">/hari</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-6 py-3 text-center">
          <button className="transform rounded-xl bg-white px-8 py-3 font-semibold text-[#800000] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
            Pesan Sekarang
          </button>
        </div>

        {/* Specifications */}
        <div className="px-6 pb-4">
          <h3 className="mb-2 text-center text-xl font-bold">SPESIFIKASI</h3>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between border-b border-white/20 py-1">
              <span className="text-white/80">Transmisi</span>
              <span className="font-medium">{transmisi}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/20 py-1">
              <span className="text-white/80">Bahan Bakar</span>
              <span className="font-medium">{bahanbakar}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/20 py-1">
              <span className="text-white/80">Warna</span>
              <span className="font-medium">{warna}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/20 py-1">
              <span className="text-white/80">Kapasitas</span>
              <span className="font-medium">{kapasitas ? kapasitas + " " + 'Orang': 'Menyesuaikan'} </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-white/80">Tahun</span>
              <span className="font-medium">Terbaru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
