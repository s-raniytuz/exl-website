import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu_icon.svg";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <div className="logo-container flex gap-3">
        <img src={logo} alt="" />
        <span className="text-2xl mb-px tracking-wider font-medium text-main-dark">
          Exiting Life
        </span>
      </div>
      <img src={menuIcon} alt="A menu icon" className="w-7" />
    </nav>
  );
}
