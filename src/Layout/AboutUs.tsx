import BGAboutus from "../assets/BGHero.png";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-tl-[100px] rounded-tr-[100px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BGAboutus})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="container mx-auto px-4 pt-20 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide text-white md:text-6xl">
            TENTANG KAMI
          </h2>
          <div className="mx-auto mt-6 h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Partner Terpercaya untuk Semua Kebutuhan Transportasi Anda
          </p>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-6xl">
            {/* Company Description */}
            <div
              data-aos="flip-right"
              className="mb-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-10 "
            >
              <div className="mb-8 text-center">
                <h3 className="mb-6 text-4xl font-bold text-white">
                  CV. Tujuh Sembilan Oto
                </h3>
                <div className="mx-auto mb-6 h-0.5 w-20 bg-yellow-400"></div>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-1">
                <div>
                  <p className="mb-6 text-lg leading-relaxed text-gray-200">
                    Sejak didirikan,{" "}
                    <span className="font-semibold text-yellow-400">
                      CV. Tujuh Sembilan Oto
                    </span>{" "}
                    telah menjadi pilihan utama untuk layanan rental mobil di
                    Berau. Kami berkomitmen memberikan pengalaman transportasi
                    yang aman, nyaman, dan terpercaya untuk setiap perjalanan
                    Anda.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-200">
                    Dengan armada yang terawat dan tim profesional
                    berpengalaman, kami siap melayani berbagai kebutuhan
                    transportasi, mulai dari keperluan pribadi, bisnis, hingga
                    proyek-proyek besar di sektor pertambangan.
                  </p>
                </div>

                {/* <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-sm text-gray-300">
                      Tahun Pengalaman
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-sm text-gray-300">Klien Puas</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-300">Armada Siap</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-300">Layanan</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="mb-20 grid gap-8 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="to-gray/10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#800000] to-[#a00000]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">
                  Visi Kami
                </h4>
                <p className="leading-relaxed text-gray-200">
                  Menjadi penyedia layanan rental mobil terdepan di Kalimantan
                  Timur yang memberikan solusi transportasi terbaik dengan
                  standar keamanan, kenyamanan, dan kepuasan pelanggan yang
                  tinggi.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#800000]/20 to-[#800000]/10 p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#800000] to-[#a00000]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">
                  Misi Kami
                </h4>
                <p className="leading-relaxed text-gray-200">
                  Menyediakan layanan rental mobil berkualitas tinggi dengan
                  armada terawat, harga kompetitif, dan pelayanan professional
                  untuk mendukung mobilitas dan kesuksesan bisnis klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
