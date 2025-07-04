import { useState } from "react";
import {
  Car,
  MapPin,
  Phone,
  User,
  Calendar,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import Swal from "sweetalert2";
import { Mobil } from "./Armada";
import type { SelectSingleEventHandler } from "react-day-picker";
import PhoneNumber from "@/Api/Phone.json";


interface DropdownProps {
  icon: React.ReactNode;
  label: string;
  desc: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface InputComProps {
  icon: React.ReactNode;
  label: string;
  desc: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

interface DatepickerCustmProps {
  icon: React.ReactNode;
  label: string;
  // value: string;
  onChange: (value: string) => void;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

interface FormData {
  layanan: string;
  unit: string;
  alamatDari: string;
  tujuanKe: string;
  nama: string;
  telepon: string;
  tanggalDari: string;
  tanggalSampai: string;
}
export interface ArmadaProps {
  data: Mobil[];
}

const Dropdown = ({
  icon,
  label,
  desc,
  options,
  value,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="group flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:border-red-300 hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-red-800 transition-colors group-hover:text-red-600">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {label}
          </div>
          <div className="text-sm font-semibold text-gray-800">
            {value || desc}
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-xl border border-gray-200 bg-white shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer border-b text-black border-gray-100 p-3 first:rounded-t-xl last:rounded-b-xl last:border-b-0 hover:bg-gray-50"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InputCom = ({
  icon,
  label,
  desc,
  value,
  onChange,
  type = "text",
}: InputComProps) => {
  return (
    <div className="group relative">
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:border-red-300 hover:shadow-md">
        <div className="text-red-800 transition-colors group-hover:text-red-600">
          {icon}
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
            {label}
          </label>
          <input
            type={type}
            className="w-full bg-transparent text-sm font-semibold text-gray-800 placeholder-gray-400 outline-none"
            placeholder={desc}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const DatepickerCustm = ({ icon, label, onChange }: DatepickerCustmProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>();
  const handleChange: SelectSingleEventHandler = (
    SelectedDate: Date | undefined,
  ) => {
    setDate(SelectedDate);
    if (SelectedDate) {
      const formatted = SelectedDate.toLocaleDateString();
      setDate(SelectedDate);
      onChange(formatted);
    }
    setIsOpen(false);
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="group relative">
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:border-red-300 hover:shadow-md">
        <button className="text-red-800 transition-colors group-hover:text-red-600">
          {icon}
        </button>
        <div className="flex-1">
          <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
            {label}
          </label>
          <label className="mt-1 block text-xs font-medium uppercase tracking-wide text-gray-500">
            {date ? date.toLocaleDateString() : "Pick a Date"}
          </label>
          <div
            className={`dropdown absolute top-16 z-10 ${isOpen ? "" : "hidden"}`}
          >
            <DayPicker
              className="react-day-picker"
              mode="single"
              selected={date}
              onSelect={handleChange}
              required={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white",
    secondary:
      "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white",
  } as const;

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BookingSection = ({ data }: ArmadaProps) => {
  return (
    <div className="mx-4 my-6">
      <BookingSectionComp data={data} />
    </div>
  );
};

const BookingSectionComp = ({ data }: ArmadaProps) => {
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    layanan: "",
    unit: "",
    alamatDari: "",
    tujuanKe: "",
    nama: "",
    telepon: "",
    tanggalDari: "",
    tanggalSampai: "",
  });

  const handleNextStep = () => {
    if (
      formData.layanan == "" ||
      formData.unit == "" ||
      formData.alamatDari == "" ||
      formData.tujuanKe == ""
    ) {
      return Swal.fire({
        title: "Peringatan",
        text: "Pastikan semua form terisi",
        icon: "info",
        confirmButtonText: "Oke",
      });
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleBooking = () => {
    if (
      formData.layanan == "" ||
      formData.unit == "" ||
      formData.alamatDari == "" ||
      formData.tujuanKe == "" ||
      formData.nama == "" ||
      formData.telepon == "" ||
      formData.tanggalDari == "" ||
      formData.tanggalSampai == ""
    ) {
      return Swal.fire({
        title: "Peringatan",
        text: "Pastikan semua form terisi",
        icon: "info",
        confirmButtonText: "Oke",
      });
    }
    const phoneNumber = PhoneNumber.nomor;

    const message = `==============================
    *FORMULIR PEMESANAN*
    ==============================
    
    Halo *CV Tujuh Sembilan Oto Rent Car*, berikut data pemesanan saya:
    
    • Layanan : *${formData.layanan}*
    • Unit Armada : *${formData.unit}*
    • Nama Lengkap : *${formData.nama}*
    • No Whatsapp : *${formData.telepon}*
    • Dari Tanggal : *${formData.tanggalDari}*
    • Sampai Tanggal : *${formData.tanggalSampai}*
    • Alamat Pelanggan : *${formData.alamatDari}*
    • Rute Tujuan : *${formData.tujuanKe}*
    
    *Mohon untuk konfirmasi selanjutnya!*
    
    🙏 Terimakasih 🙏
    📩 Dikirim via http://Cvtujuhsembilnotorentcar.com`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
      (window.location.href = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`);
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative" id="booking">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-red-50 via-white to-orange-50"></div>

      {/* Main container */}
      <div
        data-aos="fade-right"
        className="relative z-50 flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-6 px-12 shadow-2xl md:mx-24 lg:-top-14 lg:mx-16"
      >
        {/* Progress indicator */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                step >= 1
                  ? "bg-red-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
            </div>
            <div
              className={`h-1 w-16 rounded-full transition-all duration-300 ${
                step >= 2 ? "bg-red-700" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                step >= 2
                  ? "bg-red-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div
          className={`duration-400 transform transition-all ease-in-out ${
            step === 1
              ? "translate-x-0 opacity-100"
              : "absolute inset-0 -translate-x-full opacity-0"
          }`}
        >
          {step === 1 && (
            <div className="space-y-6">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  Pilih Layanan & Tujuan
                </h2>
                <p className="text-gray-600">
                  Lengkapi informasi perjalanan Anda
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Dropdown
                  icon={<Car size={24} />}
                  label="Layanan"
                  desc="Pilih Jenis Layanan"
                  options={[
                    "Rental Mobil + Supir",
                    "Rental Mobil",
                    "Travel",
                    "Charter",
                    "",
                  ]}
                  value={formData.layanan}
                  onChange={(value) => updateFormData("layanan", value)}
                />

                <Dropdown
                  icon={<Car size={24} />}
                  label="Unit"
                  desc="Pilih Jenis Unit"
                  options={data.map((mobil) => mobil.merek)}
                  value={formData.unit}
                  onChange={(value) => updateFormData("unit", value)}
                />

                <InputCom
                  icon={<MapPin size={24} />}
                  label="Alamat / Dari"
                  desc="Kota asal"
                  value={formData.alamatDari}
                  onChange={(value) => updateFormData("alamatDari", value)}
                />

                <InputCom
                  icon={<MapPin size={24} />}
                  label="Tujuan / Ke"
                  desc="Kota tujuan"
                  value={formData.tujuanKe}
                  onChange={(value) => updateFormData("tujuanKe", value)}
                />
              </div>

              <div className="mt-8 flex justify-center">
                <Button onClick={handleNextStep} className="min-w-40">
                  Berikutnya
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Step 2 */}
        <div
          className={`duration-400 transform transition-all ease-in-out ${
            step === 2
              ? "translate-x-0 opacity-100"
              : "absolute inset-0 translate-x-full opacity-0"
          }`}
        >
          {step === 2 && (
            <div className="space-y-6">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  Informasi Pemesan
                </h2>
                <p className="text-gray-600">
                  Masukkan detail kontak dan jadwal perjalanan
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <InputCom
                  icon={<User size={24} />}
                  label="Atas Nama"
                  desc="Nama lengkap pemesan"
                  value={formData.nama}
                  onChange={(value) => updateFormData("nama", value)}
                />
                <InputCom
                  icon={<Phone size={24} />}
                  label="No Telepon"
                  desc="Nomor yang bisa dihubungi"
                  type="tel"
                  value={formData.telepon}
                  onChange={(value) => updateFormData("telepon", value)}
                />
                <DatepickerCustm
                  icon={<Calendar size={24} />}
                  label="Dari Tanggal"
                  // value={formData.tanggalDari}
                  onChange={(value) => updateFormData("tanggalDari", value)}
                />
                <DatepickerCustm
                  icon={<Calendar size={24} />}
                  label="Sampai Tanggal"
                  // value={formData.tanggalSampai}
                  onChange={(value) => updateFormData("tanggalSampai", value)}
                />
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  onClick={handlePrevStep}
                  variant="secondary"
                  className="min-w-32"
                >
                  Kembali
                </Button>
                <Button
                  // onClick={() => alert("Booking submitted!")}
                  onClick={handleBooking}
                  className="min-w-40"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Booking Sekarang
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
