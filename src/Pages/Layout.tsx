import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/Layout/Footer";
import { Navbar } from "@/Layout/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <div className="overflow-hidden">
        {/* <Navbar /> */}
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <main>
          <Outlet />
        </main>
        <Footer></Footer>
      </div>
    );
}
