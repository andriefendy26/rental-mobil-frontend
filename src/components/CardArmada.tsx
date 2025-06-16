interface CardArmadaProps {
  judul: string;
  image: string;
  price: number;
}

export default function CardArmada({ judul, image, price }: CardArmadaProps) {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  });
  const formatted = IDR.format(price); // e.g. "Rp1.000.000"
  const lastDotIndex = formatted.lastIndexOf(".");
  const head =
    lastDotIndex !== -1 ? formatted.slice(0, lastDotIndex) : formatted;
  const tail = lastDotIndex !== -1 ? formatted.slice(lastDotIndex) : "";
  return (
    <div className="overflow-hidden rounded-[30px] bg-[#800000]">
      <div className="flex flex-col items-center bg-[#eceded] pt-2">
        <h1 className="text-2xl font-bold">{judul}</h1>
        <img src={image} alt="" className="w-52" />
      </div>
      <div className="space-y-7 bg-[#800000] py-10 text-center text-white">
        <div>
          <h1 className="text-6xl font-bold">
            {head}
            {tail && <span className="align-top text-sm">{tail}</span>}IDR
          </h1>
          <p>/hari</p>
        </div>
        <div>
          <a className="rounded-xl border border-white bg-[#eceded] px-2 py-1 text-[#464b49]">
            Pesan Sekarang
          </a>
        </div>
        <div>
          <h1 className="space-y-6 text-xl font-bold">SPESIFIKASI</h1>
          <p>Transmisi : AT/MT</p>
          <p>Bahan Bakar : AT/MT</p>
          <p>Warna : Menyesuaikan</p>
          <p>Kapasitas : 8 Orang</p>
          <p>Tahun : TInggi</p>
        </div>
      </div>
    </div>
  );
}
