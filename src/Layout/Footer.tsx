import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import LogoSem from "../assets/Logo.png";
import { FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
              <img src={LogoSem} className="w-32 h-auto" alt="Logo" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                CV. Tujuh Sembilan Oto
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Penyedia jasa rental mobil terpercaya di Berau dengan layanan berkualitas dan armada terawat.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaFacebookSquare size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaInstagramSquare size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaYoutube size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group bg-black hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaTiktok size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <FaPhone className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Office</p>
                  <p className="text-white font-medium">08XXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">marketing@email.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Alamat Kami
            </h3>
            <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
              {/* <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" size={16} /> */}
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Rumah Warna Kuning, Jln. Garuda Gg. PUA kec. Sambaliung Kab. Berau
                  KALIMANTAN TIMUR NO RUMAH 64, Kabupaten Berau, Kalimantan Timur 77371.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">Komitmen Kami</h4>
              <p className="text-gray-300 text-sm">
                Kepuasan dan keamanan pelanggan adalah prioritas utama kami.
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Lokasi Kami
            </h3>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.4786650673482!2d117.50519919978544!3d2.169927436334606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df50228e817fb%3A0xeefa67fe773a7698!2sCV.%2079%20OTO%20RENTAL%20MOBIL%20BERAU!5e0!3m2!1sid!2sid!4v1749893345468!5m2!1sid!2sid"
                width="100%"
                height="250"
                className="border-0 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CV. Tujuh Sembilan Oto. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}