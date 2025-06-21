import {
  Eye,
  Zap,
  Car,
  Users,
  Shield,
  Clock,
  Award,
  MapPin,
} from "lucide-react";

export default function DetailAboutUs() {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Rental Harian",
      description:
        "Solusi transportasi fleksibel untuk kebutuhan pribadi dan bisnis dengan berbagai pilihan kendaraan.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Rental Bulanan",
      description:
        "Paket hemat untuk kebutuhan jangka panjang dengan maintenance dan service yang terjamin.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Layanan Proyek",
      description:
        "Dukungan transportasi khusus untuk proyek pertambangan dan konstruksi dengan armada heavy duty.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Antar Jemput",
      description:
        "Layanan transportasi door-to-door untuk keperluan bandara, stasiun, atau lokasi spesifik.",
    },
  ];

  const stats = [
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "100+", label: "Klien Puas" },
    { number: "50+", label: "Armada Siap" },
    { number: "24/7", label: "Layanan" },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Asuransi Lengkap",
      description:
        "Semua kendaraan dilengkapi asuransi comprehensive untuk keamanan perjalanan Anda.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Maintenance Berkala",
      description:
        "Perawatan rutin dan pengecekan berkala untuk memastikan performa optimal kendaraan.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Driver Berpengalaman",
      description:
        "Tim driver profesional dengan pengalaman bertahun-tahun di berbagai medan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-tl-[100px] rounded-tr-[100px]">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-800/5"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-wide text-gray-800 md:text-6xl">
              TENTANG{" "}
              <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
                KAMI
              </span>
            </h1>
            <div className="mx-auto mt-6 h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Partner Terpercaya untuk Semua Kebutuhan Transportasi Anda
            </p>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
          <div className="mb-8 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              CV. Tujuh Sembilan Oto
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-20 bg-yellow-400"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Sejak didirikan,{" "}
                <span className="font-semibold text-red-800">
                  CV. Tujuh Sembilan Oto
                </span>{" "}
                telah menjadi pilihan utama untuk layanan rental mobil di Berau.
                Kami berkomitmen memberikan pengalaman transportasi yang aman,
                nyaman, dan terpercaya untuk setiap perjalanan Anda.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Dengan armada yang terawat dan tim profesional berpengalaman,
                kami siap melayani berbagai kebutuhan transportasi, mulai dari
                keperluan pribadi, bisnis, hingga proyek-proyek besar di sektor
                pertambangan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition-all duration-300 hover:border-red-300 hover:shadow-md"
                >
                  <div className="mb-2 text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-800 to-red-600">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Visi Kami
              </h3>
              <p className="leading-relaxed text-gray-600">
                Menjadi penyedia layanan rental mobil terdepan di Kalimantan
                Timur yang memberikan solusi transportasi terbaik dengan standar
                keamanan, kenyamanan, dan kepuasan pelanggan yang tinggi.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-800 to-red-600">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Misi Kami
              </h3>
              <p className="leading-relaxed text-gray-600">
                Menyediakan layanan rental mobil berkualitas tinggi dengan
                armada terawat, harga kompetitif, dan pelayanan professional
                untuk mendukung mobilitas dan kesuksesan bisnis klien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Layanan Kami
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Solusi transportasi lengkap untuk berbagai kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:scale-105 hover:transform hover:border-red-300 hover:shadow-lg"
            >
              <div className="mb-4 text-red-800">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-red-800/10 to-red-600/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Mengapa Pilih Kami?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk
              kebutuhan rental mobil Anda
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <div className="text-red-800">{feature.icon}</div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Highlight */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Armada Berkualitas
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Kami memiliki berbagai jenis kendaraan yang siap memenuhi
                kebutuhan transportasi Anda, mulai dari mobil ekonomis untuk
                perjalanan pribadi hingga kendaraan heavy duty untuk proyek
                industri.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-red-800"></div>
                  <span className="text-gray-600">
                    Mobil Pribadi (Sedan, Hatchback, SUV)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-red-800"></div>
                  <span className="text-gray-600">
                    Mobil Bisnis (MPV, Minibus)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-red-800"></div>
                  <span className="text-gray-600">
                    Kendaraan Proyek (Pickup, Truk)
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-r from-red-800 to-red-600"></div>
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop"
                alt="Armada Kendaraan"
                className="relative h-80 w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            Siap Memulai Perjalanan?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
            konsultasi gratis mengenai kebutuhan transportasi Anda
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-red-800 to-red-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:transform hover:from-red-900 hover:to-red-700 hover:shadow-red-500/25">
              Hubungi Sekarang
            </button>
            <button className="rounded-full border-2 border-red-800 px-8 py-4 font-semibold text-red-800 transition-all duration-300 hover:scale-105 hover:transform hover:bg-red-800 hover:text-white">
              Lihat Armada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
