import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu_icon.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <div className="logo-container flex gap-3">
        <img src={logo} alt="" />
        <span className="text-2xl mb-px tracking-wider font-medium text-main-dark">
          Exiting Life
        </span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={menuIcon} alt="A menu icon" className="w-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 bg-[#F6F2FF] mt-1">
          <div id="version-menu-header" className="flex justify-between">
            <DropdownMenuLabel className="text-lg text-main-dark cursor-default">
              Версии
            </DropdownMenuLabel>
            <DropdownMenuItem className="text-main-purple cursor-pointer">
              Больше версий
            </DropdownMenuItem>
          </div>
          <DropdownMenuItem className="text-main-dark opacity-60 -mt-3 text-[14px]">
            Скачайте любую версию Exciting Life
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between hover:none">
            <div className="version-card shadow-sm rounded border w-[30%] h-12 flex justify-center items-center text-[16px] font-medium text-main-dark tracking-wide opacity-90">
              <span>v0.0.2x</span>
            </div>
            <div className="version-card shadow-sm rounded border w-[30%] h-12 flex justify-center items-center text-[16px] font-medium text-main-dark tracking-wide opacity-90">
              <span>v0.0.1x</span>
            </div>
            <div className="version-card shadow-sm rounded border w-[30%] h-12 flex justify-center items-center text-[16px] font-medium text-main-dark tracking-wide opacity-90">
              <span>v0.0.0x</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-main-dark opacity-5 mt-2"></DropdownMenuSeparator>
          <DropdownMenuLabel className="text-lg text-main-dark">
            Наши соцсети
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
