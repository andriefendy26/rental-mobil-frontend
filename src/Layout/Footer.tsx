import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import LogoSem from "../assets/Logo.png";
import { FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa6";
import Phone from "@/Api/Phone.json"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="inline-block rounded-2xl bg-white p-4 shadow-lg">
              <img src={LogoSem} className="h-auto w-32" alt="Logo" />
            </div>
            <div>
              <h2 className="mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent">
                CV. Tujuh Sembilan Oto
              </h2>
              <p className="leading-relaxed text-gray-300">
                Penyedia jasa rental mobil terpercaya di Berau dengan layanan
                berkualitas dan armada terawat.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="group transform rounded-full bg-blue-600 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-lg"
                >
                  <FaFacebookSquare
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  className="group transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 transition-all duration-300 hover:scale-110 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg"
                >
                  <FaInstagramSquare
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  className="group transform rounded-full bg-red-600 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-lg"
                >
                  <FaYoutube
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@wisda.wis?_t=ZS-8xCD8EIRnTr&_r=1"
                  className="group transform rounded-full bg-black p-3 transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg"
                >
                  <FaTiktok
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="mb-6 border-b border-gray-700 pb-2 text-xl font-bold text-white">
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rounded-lg bg-gray-800/50 p-3 transition-colors hover:bg-gray-700/50">
                <FaPhone
                  className="mt-1 flex-shrink-0 text-emerald-400"
                  size={16}
                />
                <div>
                  <p className="text-sm text-gray-300">Office</p>
                  <p className="font-medium text-white">{Phone.nomor}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg bg-gray-800/50 p-3 transition-colors hover:bg-gray-700/50">
                <FaEnvelope
                  className="mt-1 flex-shrink-0 text-emerald-400"
                  size={16}
                />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-medium text-white">marketing@email.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="mb-6 border-b border-gray-700 pb-2 text-xl font-bold text-white">
              Alamat Kami
            </h3>
            <div className="flex items-start space-x-3 rounded-lg bg-gray-800/50 p-3">
              {/* <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" size={16} /> */}
              <div>
                <p className="leading-relaxed text-gray-300">
                  Rumah Warna Kuning, Jln. Garuda Gg. PUA kec. Sambaliung Kab.
                  Berau KALIMANTAN TIMUR NO RUMAH 64, Kabupaten Berau,
                  Kalimantan Timur 77371.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-2 text-lg font-semibold text-white">
                Komitmen Kami
              </h4>
              <p className="text-sm text-gray-300">
                Kepuasan dan keamanan pelanggan adalah prioritas utama kami.
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 border-b border-gray-700 pb-2 text-xl font-bold text-white">
              Lokasi Kami
            </h3>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.4786650673482!2d117.50519919978544!3d2.169927436334606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df50228e817fb%3A0xeefa67fe773a7698!2sCV.%2079%20OTO%20RENTAL%20MOBIL%20BERAU!5e0!3m2!1sid!2sid!4v1749893345468!5m2!1sid!2sid"
                width="100%"
                height="250"
                className="border-0 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 CV. Tujuh Sembilan Oto. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-emerald-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-emerald-400"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-emerald-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}