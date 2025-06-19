import Logo from "../assets/Logo.png";

export const LogoNav = () => {
  return (
    <div className="rounded-xl bg-white px-3 py-2">
      <img className="lg:w-24 w-20" src={Logo} alt="Logo Tujuh Sembilan" />
    </div>
  );
};
