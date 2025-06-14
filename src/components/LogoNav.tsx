import Logo from "../assets/Logo.png";

export const LogoNav = () => {
  return (
    <div className="rounded-xl bg-white px-3 py-1 shadow">
      <img className="w-24" src={Logo} alt="Logo Tujuh Sembilan" />
    </div>
  );
};
