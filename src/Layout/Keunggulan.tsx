import Card2 from "@/components/Card2";
import Logo1 from "../assets/1.png";

interface KeunggulanProps {
  Logo: string;
  Judul: string;
  Deskripsi: string;
}

export default function Keunggulan() {
  const Keunggulan: KeunggulanProps = [
    {
      Logo: Logo1,
      Judul: "Tersedia Pilihan Mobil",
      Deskripsi:
        "Di CV Tujuh Sembilan Oto Tersedia berbagai jenis mobil sewa/rental yang bisa dipilih sesuai dengan kebutuhan pekerjaan dan perjalanan. Ada mobil matik dan manual dan lainnya.",
    },
    {
      Logo: Logo1,
      Judul: "Mobil Rental Terawat",
      Deskripsi:
        "Kami memastikan mobil yang siap dirental atau sewa berada dalam kondisi baik dengan melakukan servis secara rutin.",
    },
    {
      Logo: Logo1,
      Judul: "Biaya Sewa Terjangkau",
      Deskripsi:
        "Kami merupakan salah satu penyedia rental mobil di Berau yang memberikan paket harga sewa yang terjangkau untuk semua kalangan masyarakat.",
    },
    {
      Logo: Logo1,
      Judul: "Tersedia Banyak Paket Sewa",
      Deskripsi:
        "Di CV Tujuh Sembilan Oto Tersedia berbagai jenis mobil sewa/rental yang bisa dipilih sesuai dengan kebutuhan pekerjaan dan perjalanan. Ada mobil matik dan manual dan lainnya.",
    },
    {
      Logo: Logo1,
      Judul: "Rental Sewa Buka 24 Jam",
      Deskripsi:
        "Untuk memberikan kemudahan sewa rental mobil di Berau, kami memberikan layanan 24 jam.",
    },
    {
      Logo: Logo1,
      Judul: "Tersedia Paket Promo",
      Deskripsi:
        "Semakin sering menggunakan layanan jasa rental mobil CV Tujuh Sembilan Oto, Anda akan berpeluang besar mendapatkan paket promo dan diskon harga.",
    },
  ];
  return (
    <div className="bg-[#800000] py-10 text-center text-white">
      <div className="mb-10 space-y-3">
        <h1 className="text-4xl font-bold">Keunggulan Kami</h1>
        <p className="">
          Keunggulan Rental Mobil Kami Dibandingkan yang Lainnya
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 px-40">
        {Keunggulan.map(({ Logo, Judul, Deskripsi} : KeunggulanProps) => (
          <Card2
            Logo={Logo}
            Judul={Judul}
            Deskripsi={Deskripsi}
          ></Card2>
        ))}
      </div>
    </div>
  );
}
