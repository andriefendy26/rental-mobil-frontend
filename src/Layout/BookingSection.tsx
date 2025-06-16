import { useState } from "react";
// import Dropdown from "@/components/Dropdown";
import { FaCarAlt, FaMapMarkerAlt, FaPhoneAlt, FaUser ,FaCalendar} from "react-icons/fa";
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
  // const [layanan, setLayanan] = useState("Pilih Jenis Layanan");
  // const [alamatDari, setAlamatDari] = useState("Tarakan");
  // const [tujuanKe, setTujuanKe] = useState("Tarakan");
  // const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="relative -top-14 z-50 mx-40 flex flex-col rounded-[100px] bg-white p-4 px-10 shadow-lg">
      {step === 1 && (
        <div className="flex gap-4 text-black">
          <Dropdown
            icon1={<FaCarAlt size={40} color="#800000"></FaCarAlt>}
            label="Layanan"
            desc="Pilih Jenis Layanan"
            options={["Inter", "Poppins"]}
          ></Dropdown>
          <Dropdown
            icon1={<FaCarAlt size={40} color="#800000"></FaCarAlt>}
            label="Unit"
            desc="Pilih Jenis Unit"
            options={["Inter", "Poppins"]}
          ></Dropdown>
          <InputCom
            icon1={<FaMapMarkerAlt size={40} color="#800000"></FaMapMarkerAlt>}
            label="Alamat / Dari"
            desc="Tarakan"
          ></InputCom>
          <InputCom
            icon1={<FaMapMarkerAlt size={40} color="#800000"></FaMapMarkerAlt>}
            label="Tujuan / Ke"
            desc="Nunukan"
          ></InputCom>

          <Button color="maron" onclick={() => setStep(2)}>
            Berikutnya
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-wrap items-center justify-between gap-3 text-black">
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
  );
};
