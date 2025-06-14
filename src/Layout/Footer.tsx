import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import LogoSem from "../assets/Logo.png";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="text-white">
      <footer className="footer text-base-content border-base-300 border-t bg-[#464b49] px-8 pt-4">
        <aside className="rounded-xl bg-[#f8f8f8]">
          <img src={LogoSem} className="w-40" alt="Logo"></img>
        </aside>
      </footer>
      <footer className="footer sm:footer-horizontal bg-[#464b49]  p-10">
        <nav className="flex flex-col gap-4">
          <div>
            <h1 className="mb-2 text-xl font-semibold">
              CV. Tujuh Sembilan Oto
            </h1>
            <p className="">Penyedia jasa rental mobil terpercaya di Berau.</p>
          </div>
          <div>
            <h1 className="mb-2 text-xl font-semibold">
              Hubungi Untuk Pemesanan
            </h1>
            <p className="">Office : 08XXXXX</p>
            <p className="">Email : marketing@email.com</p>
          </div>
          <div className="">
            <h1 className="mb-2 text-xl font-semibold">Connect with us</h1>
            <div className="flex gap-1">
              <a className="link link-hover">
                <FaFacebookSquare size={30} />
              </a>
              <a className="link link-hover">
                <FaInstagramSquare size={30} />
              </a>
              <a className="link link-hover">
                <FaYoutube size={30} />
              </a>
              <a className="link link-hover">
                <FaTiktok size={30} />
              </a>
            </div>
          </div>
        </nav>
        <nav className="flex flex-col gap-4">
          <div>
            <h1 className="mb-2 text-xl font-semibold">
              CV. Tujuh Sembilan Oto
            </h1>
            <p className="w-52">
              Rumah Warna Kuning, Jln. Garuda Gg. PUA kec. Sambaliung Kab. Berau
              KALIMANTAN TIMUR NO RUMAH 64, Kabupaten Berau, Kalimantan Timur
              77371.
            </p>
          </div>
          <div>
            <h1 className="mb-2 text-xl font-semibold">Artikel Terbaru</h1>
            <p className="">
              Kepuasan dan keamanan pelanggan adalah prioritas utama kami.
            </p>
          </div>
        </nav>
        <nav>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.4786650673482!2d117.50519919978544!3d2.169927436334606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df50228e817fb%3A0xeefa67fe773a7698!2sCV.%2079%20OTO%20RENTAL%20MOBIL%20BERAU!5e0!3m2!1sid!2sid!4v1749893345468!5m2!1sid!2sid"
            width="400"
            height="300"
            className="self-end rounded-xl"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </nav>
      </footer>
    </div>
  );
}
