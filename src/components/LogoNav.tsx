import Logo from '../assets/Logo.png'

export const LogoNav = () => {
  return (
    <div>
      <div className="relative">
        <div className="trapezium-box flex h-16 w-48 items-center justify-center bg-[#eceded] text-lg font-bold text-white">
          <div className="text-center">
            <img className='w-28' src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
