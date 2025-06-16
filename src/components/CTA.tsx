
export default function CTA() {
  return (
            <div className="mt-20 text-center">
              <div className="rounded-3xl bg-gradient-to-r from-[#800000] to-[#a00000] p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Siap Memulai Perjalanan Anda?
                </h3>
                <p className="mb-6 text-gray-200">
                  Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
                  konsultasi gratis
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <button className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-500">
                    Hubungi Sekarang
                  </button>
                  <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black">
                    Lihat Armada
                  </button>
                </div>
              </div>
            </div>
  )
}
