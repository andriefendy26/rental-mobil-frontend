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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="container mx-auto px-4 pt-20 text-center">
          <h2 className="text-4xl font-bold tracking-wide text-white md:text-5xl">
            TENTANG KAMI
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            {/* Company Description */}
            <div className="mb-16 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-3xl font-bold text-white">
                CV. Tujuh Sembilan Oto
              </h3>
              <p className="text-lg leading-relaxed text-gray-200">
                Kami adalah penyedia jasa rental mobil terpercaya di Berau yang
                berkomitmen memberikan layanan terbaik untuk memenuhi kebutuhan
                transportasi Anda, baik untuk keperluan pribadi, perusahaan,
                maupun proyek tambang.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#800000]">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Layanan 24 Jam
                </h4>
                <p className="text-gray-200">
                  Siap melayani Anda kapan saja, 24 jam sehari, 7 hari seminggu
                </p>
              </div>

              <div className="group rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#800000]">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Terpercaya
                </h4>
                <p className="text-gray-200">
                  Armada terawat dan pengemudi profesional
                </p>
              </div>

              <div className="group rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#800000]">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Harga Bersaing
                </h4>
                <p className="text-gray-200">
                  Dapatkan harga terbaik untuk setiap layanan kami
                </p>
              </div>
            </div>

            {/* Services List */}
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-xl font-semibold text-white">
                  Layanan Kami
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Rental Mobil Pribadi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Rental Mobil Perusahaan
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Rental Mobil Tambang
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-xl font-semibold text-white">
                  Keunggulan
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Armada Terawat
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Harga Bersaing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-400">•</span>
                    Layanan 24 Jam
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
