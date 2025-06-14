import Card2 from "@/components/Card2";
import Logo1 from "../assets/1.png";
import Car1 from "../assets/CarKeunggulan2.png";
import Car2 from "../assets/CarKeunggulan1.png";

interface KeunggulanProps {
  Logo: string;
  Judul: string;
  Deskripsi: string;
}

export default function Keunggulan() {
  const Keunggulan: KeunggulanProps[] = [
    {
      Logo: Logo1,
      Judul: "Tersedia Pilihan Mobil",
      Deskripsi:
        "Berbagai jenis mobil sewa tersedia sesuai kebutuhan perjalanan atau pekerjaan Anda.",
    },
    {
      Logo: Logo1,
      Judul: "Mobil Rental Terawat",
      Deskripsi:
        "Selalu dalam kondisi prima, dirawat secara berkala untuk kenyamanan dan keamanan Anda.",
    },
    {
      Logo: Logo1,
      Judul: "Biaya Sewa Terjangkau",
      Deskripsi:
        "Harga bersaing untuk semua kalangan, dengan pilihan paket yang fleksibel.",
    },
    {
      Logo: Logo1,
      Judul: "Banyak Paket Sewa",
      Deskripsi:
        "Sewa harian, mingguan, hingga bulanan. Bisa disesuaikan dengan kebutuhan Anda.",
    },
    {
      Logo: Logo1,
      Judul: "Layanan 24 Jam",
      Deskripsi:
        "Kami siap melayani Anda kapan pun dengan sistem pemesanan yang fleksibel.",
    },
    {
      Logo: Logo1,
      Judul: "Promo & Diskon",
      Deskripsi:
        "Manfaatkan berbagai promo dan diskon menarik untuk pelanggan setia kami.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#800000] py-16 text-white">
      <div className="mb-12 px-4 text-center">
        <h1 className="text-4xl font-bold">Keunggulan Kami</h1>
        <p className="mt-2 text-lg">
          Keunggulan Rental Mobil Kami Dibandingkan yang Lainnya
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 justify-items-center gap-10 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-24">
        {Keunggulan.map(({ Logo, Judul, Deskripsi }, index) => (
          <Card2 key={index} Logo={Logo} Judul={Judul} Deskripsi={Deskripsi} />
        ))}
      </div>

      {/* Gambar Mobil */}
      <div className="relative mt-20 flex items-center justify-between px-10 md:px-32">
        <img src={Car1} alt="Car 1" className="-mb-10 w-36 md:-mb-16 md:w-52" />
        <img src={Car2} alt="Car 2" className="-mb-10 w-36 md:-mb-16 md:w-52" />
      </div>
    </section>
  );
}
