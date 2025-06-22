import { getArtikelById } from "@/Api/Mobil";
import {
  // Calendar,
  // Eye,
  ArrowLeft,
  // Clock,
  // Tag,
  // BookOpen,
  // ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { renderBlogContent } from "./RenderContent";

// interface Author {
//   name: string;
//   avatar: string;
//   bio: string;
//   socialMedia: {
//     twitter: string;
//     linkedin: string;
//   };
// }

// interface RelatedArticle {
//   id: number;
//   title: string;
//   image: string;
//   readTime: string;
// }

// interface Article {
//   id: number;
//   title: string;
//   subtitle: string;
//   author: Author;
//   publishDate: string;
//   readTime: string;
//   views: number;
//   likes: number;
//   comments: number;
//   category: string;
//   tags: string[];
//   image: string;
//   content: string;
//   relatedArticles: RelatedArticle[];
// }

// Static article data
// const articleData: Article = {
//   id: 1,
//   title: "Panduan Lengkap Memilih Rental Mobil Terpercaya",
//   subtitle:
//     "Tips dan strategi komprehensif untuk memilih jasa rental mobil yang aman, terpercaya, dan sesuai dengan kebutuhan perjalanan Anda",
//   author: {
//     name: "Ahmad Fauzi",
//     avatar:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//     bio: "Travel writer dan automotive enthusiast dengan pengalaman 8+ tahun di industri rental mobil",
//     socialMedia: {
//       twitter: "@ahmadfauzi",
//       linkedin: "ahmad-fauzi",
//     },
//   },
//   publishDate: "2024-06-15",
//   readTime: "8 min",
//   views: 2847,
//   likes: 156,
//   comments: 23,
//   category: "Tips",
//   tags: ["Rental Mobil", "Tips", "Perjalanan", "Panduan", "Keamanan"],
//   image:
//     "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop",
//   content: `
// Memilih jasa rental mobil yang tepat adalah kunci kesuksesan perjalanan Anda. Dengan banyaknya pilihan yang tersedia, penting untuk mengetahui kriteria apa saja yang harus diperhatikan agar tidak salah pilih.

// ## 1. Reputasi dan Legalitas Perusahaan

// Langkah pertama yang harus dilakukan adalah memverifikasi legalitas perusahaan rental. Pastikan perusahaan memiliki:

// - **Izin usaha yang lengkap** dari instansi terkait
// - **SIUP (Surat Izin Usaha Perdagangan)** yang masih berlaku  
// - **Sertifikat uji kir** untuk semua kendaraan
// - **Asuransi kendaraan** yang comprehensive

// Anda bisa mengecek reputasi perusahaan melalui review online, testimonial pelanggan, dan rating di platform digital. Perusahaan yang terpercaya biasanya memiliki track record yang baik dan transparan dalam memberikan informasi.

// ## 2. Kondisi dan Kualitas Kendaraan

// Kondisi mobil adalah faktor krusial yang menentukan kenyamanan dan keamanan perjalanan. Hal-hal yang perlu diperhatikan:

// ### Eksterior Kendaraan
// - Periksa kondisi cat dan body mobil
// - Pastikan tidak ada kerusakan major seperti penyok atau karat
// - Cek kondisi ban, pastikan masih tebal dan tidak gundul
// - Periksa lampu depan, belakang, sein, dan hazard

// ### Interior Kendaraan  
// - Kondisi jok dan dashboard
// - Fungsi AC dan sistem audio
// - Kelengkapan safety belt
// - Kebersihan kabin secara keseluruhan

// ### Mesin dan Performa
// - Test drive sebelum menyewa
// - Periksa suara mesin apakah normal
// - Cek sistem rem dan kopling
// - Pastikan tidak ada indikator warning di dashboard

// ## 3. Paket dan Harga yang Kompetitif

// Bandingkan harga dari beberapa penyedia untuk mendapatkan deal terbaik. Perhatikan hal-hal berikut:

// - **Harga dasar** sewa per hari
// - **Biaya tambahan** seperti driver, BBM, tol
// - **Sistem deposit** dan cara pengembaliannya
// - **Denda** keterlambatan dan kerusakan
// - **Paket khusus** untuk sewa jangka panjang

// > **Pro Tip:** Jangan tergoda harga murah yang tidak masuk akal. Harga yang terlalu rendah bisa jadi red flag kualitas atau ada biaya tersembunyi.

// ## 4. Pelayanan dan Customer Service

// Kualitas pelayanan mencerminkan profesionalitas perusahaan:

// ### Responsivitas
// - Kecepatan respon saat inquiry
// - Ketersediaan customer service 24/7
// - Kemudahan dalam proses booking

// ### Fleksibilitas
// - Kebijakan pembatalan yang reasonable
// - Opsi pengantaran dan penjemputan
// - Kemudahan perpanjangan sewa

// ### Support Darurat
// - Layanan bantuan di jalan (roadside assistance)
// - Penggantian kendaraan jika terjadi breakdown
// - Kontak emergency yang mudah dihubungi

// ## 5. Asuransi dan Perlindungan

// Aspek asuransi sangat penting untuk melindungi Anda dari risiko finansial:

// - **TLO (Total Loss Only)**: Melindungi dari kehilangan total
// - **All Risk**: Perlindungan menyeluruh termasuk kerusakan ringan
// - **Third Party Liability**: Perlindungan terhadap pihak ketiga
// - **Personal Accident**: Perlindungan untuk penumpang

// Pastikan Anda memahami coverage dan eksklusi dari asuransi yang disediakan.

// ## 6. Dokumen dan Persyaratan

// Siapkan dokumen yang diperlukan dengan lengkap:

// ### Dokumen Wajib
// - KTP yang masih berlaku
// - SIM A dengan masa berlaku minimal 6 bulan
// - Kartu kredit atau deposit tunai
// - NPWP (untuk sewa korporat)

// ### Verifikasi Tambahan
// - Nomor telepon yang bisa dihubungi
// - Alamat domisili yang jelas
// - Emergency contact person

// ## 7. Tips Praktis Saat Menyewa

// ### Sebelum Mengambil Mobil
// 1. **Dokumentasi kondisi kendaraan** dengan foto/video
// 2. **Test semua fitur** mobil sebelum berangkat
// 3. **Catat nomor emergency** perusahaan rental
// 4. **Pahami area coverage** layanan bantuan

// ### Selama Masa Sewa
// 1. **Jaga kondisi kendaraan** dengan baik
// 2. **Lakukan service rutin** jika sewa jangka panjang
// 3. **Hubungi rental** jika ada masalah teknis
// 4. **Simpan struk** BBM dan tol jika diperlukan

// ### Saat Pengembalian
// 1. **Kembalikan dengan kondisi sama** seperti saat terima
// 2. **Isi BBM** sesuai kesepakatan
// 3. **Cek kembali** barang pribadi di dalam mobil
// 4. **Minta konfirmasi** pengembalian deposit

// ## Kesimpulan

// Memilih rental mobil terpercaya membutuhkan riset dan perhatian pada detail. Prioritaskan keamanan dan kenyamanan daripada harga murah semata. Dengan mengikuti panduan ini, Anda dapat menikmati perjalanan yang aman dan menyenangkan.

// Ingatlah bahwa investasi pada rental mobil berkualitas adalah investasi untuk keselamatan dan kenyamanan perjalanan Anda. Happy traveling!
// `,
//   relatedArticles: [
//     {
//       id: 2,
//       title: "Mobil SUV vs Sedan: Mana yang Cocok untuk Liburan?",
//       image:
//         "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
//       readTime: "12 min",
//     },
//     {
//       id: 3,
//       title: "Cara Menghemat Budget Rental Mobil",
//       image:
//         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
//       readTime: "10 min",
//     },
//     {
//       id: 4,
//       title: "Asuransi Rental Mobil: Penting atau Tidak?",
//       image:
//         "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
//       readTime: "15 min",
//     },
//   ],
// };

interface DetailArtikelInterface {
  judul : string;
  sub_judul : string;
  content : string;
  gambar : string;
  tags : string;
  author : string;
}

export default function DetailArtikel(): JSX.Element {
  const { id } = useParams();
  // const [loading, setLoading] = useState<boolean>(true);
  const [detailArtikel, setArtikel] = useState<DetailArtikelInterface>();

  const getDataArtikelByID = async () => {
    try {
      const respons = await getArtikelById(id);
      setArtikel(respons.data.artikel);
      console.log("isi respone artikel", respons.data.artikel);
    } catch (error) {
      console.error("Gagal mengambil data mobil:", error);
    }
  };
  useEffect(() => {
    getDataArtikelByID();
  }, []);

  // const formatDate = (dateString: string): string => {
  //   return new Date(dateString).toLocaleDateString("id-ID", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  // const renderContent = (content?: string): JSX.Element[] => {
  //   if (!content) {
  //     return [
  //       <p key="no-content" className="italic text-gray-500">
  //         Konten tidak tersedia.
  //       </p>,
  //     ];
  //   }

  //   return content.split("\n").map((line, index) => {
  //     if (line.startsWith("## ")) {
  //       return (
  //         <h2
  //           key={index}
  //           className="mb-4 mt-8 text-2xl font-bold text-gray-900"
  //         >
  //           {line.replace("## ", "")}
  //         </h2>
  //       );
  //     } else if (line.startsWith("### ")) {
  //       return (
  //         <h3
  //           key={index}
  //           className="mb-3 mt-6 text-xl font-semibold text-gray-800"
  //         >
  //           {line.replace("### ", "")}
  //         </h3>
  //       );
  //     } else if (line.startsWith("> ")) {
  //       return (
  //         <blockquote
  //           key={index}
  //           className="my-4 border-l-4 border-[#800000] bg-[#800000]/20 p-4 italic"
  //         >
  //           {line.replace("> ", "")}
  //         </blockquote>
  //       );
  //     } else if (line.startsWith("- ")) {
  //       return (
  //         <li key={index} className="mb-2 ml-6">
  //           {line.replace("- ", "")}
  //         </li>
  //       );
  //     } else if (line.trim() === "") {
  //       return <br key={index} />;
  //     } else {
  //       return (
  //         <p key={index} className="mb-4 leading-relaxed text-gray-700">
  //           {line}
  //         </p>
  //       );
  //     }
  //   });
  // };
  

  return (
    <div className="mt-28 min-h-screen bg-gray-50">
      {/* Header dengan breadcrumb */}
      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="mb-2 flex items-center text-sm text-gray-500">
            <Link
              to="/artikel"
              className="flex items-center transition-colors hover:text-[#800000]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Blog
            </Link>
            {/* <ChevronRight className="mx-2 h-4 w-4" /> */}
            {/* <span className="text-[#800000]">{detailArtikel.category}</span> */}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          {/* <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-[#800000]/20 px-3 py-1 text-sm font-medium text-[#800000]">
              <Tag className="mr-1 h-4 w-4" />
              {articleData.category}
            </span>
          </div> */}

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
            {detailArtikel?.judul}
          </h1>

          <p className="mb-6 text-xl leading-relaxed text-gray-600">
            {detailArtikel?.sub_judul}
          </p>
          {/* <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(articleData.publishDate)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {articleData.readTime} baca
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              {articleData.views.toLocaleString()} views
            </div>
          </div> */}
        </header>

        <div className="mb-8">
          <img
            src={detailArtikel?.gambar}
            alt={detailArtikel?.judul}
            className="skeleton h-96 w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        <article className="prose-lg prose max-w-none">
          <div className="porse rounded-xl border bg-white p-8 shadow-sm">
            {/* {renderContent(detailArtikel.content)} */}
            {renderBlogContent(detailArtikel?.content)}
          </div>
        </article>

        {detailArtikel?.tags && (
          <div className="mt-8 border-t pt-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {detailArtikel.tags
                .split(",")
                .map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    #{tag.trim()}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* <div className="mt-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Artikel Terkait
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articleData.relatedArticles.map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h4 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-900">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
