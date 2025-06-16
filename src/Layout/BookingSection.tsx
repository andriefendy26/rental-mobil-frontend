import { useState } from "react";
// import Dropdown from "@/components/Dropdown";
import {
  FaCarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaCalendar,
} from "react-icons/fa";
// import { MdDateRange } from "react-icons/md";
import { Button } from "@/components/Button";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "@/components/Dropdown";
import InputCom from "@/components/InputCom";
import DatepickerCustm from "@/components/DatepickerCustm";

export const BookingSection = () => {
  return (
    <div className="mx-4 my-6">
      <BookingSectionComp />
    </div>
  );
};

const BookingSectionComp = () => {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [layanan, setLayanan] = useState("Pilih Jenis Layanan");
  // const [alamatDari, setAlamatDari] = useState("Tarakan");
  // const [tujuanKe, setTujuanKe] = useState("Tarakan");
  // const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleNextStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(2);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative z-50 flex flex-col overflow-hidden rounded-xl border bg-white p-4 px-10 shadow-xl md:mx-24 lg:-top-14 lg:mx-16">
      <div
        className={`transform transition-all duration-300 ease-in-out ${isAnimating ? "-translate-x-full" : "translate-x-0"}`}
      >
        {step === 1 && (
          <div className="grid gap-5 text-black md:grid-cols-2 md:gap-10 md:p-4 lg:grid-cols-5 lg:p-2">
            <div className="">
              <Dropdown
                icon1={<FaCarAlt size={40} color="#800000"></FaCarAlt>}
                label="Layanan"
                desc="Pilih Jenis Layanan"
                options={["Inter", "Poppins"]}
              ></Dropdown>
            </div>
            <Dropdown
              icon1={<FaCarAlt size={40} color="#800000"></FaCarAlt>}
              label="Unit"
              desc="Pilih Jenis Unit"
              options={["Inter", "Poppins"]}
            ></Dropdown>
            <InputCom
              icon1={
                <FaMapMarkerAlt size={40} color="#800000"></FaMapMarkerAlt>
              }
              label="Alamat / Dari"
              desc="Tarakan"
            ></InputCom>
            <InputCom
              icon1={
                <FaMapMarkerAlt size={40} color="#800000"></FaMapMarkerAlt>
              }
              label="Tujuan / Ke"
              desc="Nunukan"
            ></InputCom>

            <Button color="maron" onclick={handleNextStep}>
              Berikutnya
            </Button>
          </div>
        )}
      </div>

      <div
        className={`transform transition-all duration-300 ease-in-out ${step === 2 ? "translate-x-0" : "translate-x-full"}`}
      >
        {step === 2 && (
          <div className="grid gap-5 text-black md:grid-cols-2 md:gap-10 md:p-4 lg:grid-cols-5 lg:p-2">
            <InputCom
              icon1={<FaUser size={35} color="#800000"></FaUser>}
              label="Atas Nama"
              desc="Nama Pemesan"
            ></InputCom>
            <InputCom
              icon1={<FaPhoneAlt size={35} color="#800000"></FaPhoneAlt>}
              label="No Telepon"
              desc="Nomor Telepon"
            ></InputCom>
            <DatepickerCustm
              icon1={<FaCalendar size={35} color="#800000"></FaCalendar>}
              label="Dari Tanggal"
            ></DatepickerCustm>
            <DatepickerCustm
              icon1={<FaCalendar size={35} color="#800000"></FaCalendar>}
              label="Sampai Tanggal"
            ></DatepickerCustm>
            <Button color="maron" onclick={() => null}>
              Booking
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
