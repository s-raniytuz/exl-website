import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu_icon.svg";
import telegramLogo from "../assets/telegram_logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import MenuCard from "./custom-ui/MenuCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [versionsData, setVersionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getVersions() {
    setIsLoading(true);
    try {
      const rawData = await fetch(
        "https://nodejs-serverless-function-exl-website.vercel.app/api/app_versions"
      );
      const versions = await rawData.json();
      setVersionsData(versions);
    } catch (err) {
      console.log(err);
      setVersionsData([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getVersions();
  }, []);

  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <Link to="/">
        <div className="logo-container flex gap-3">
          <img src={logo} alt="" />
          <span className="text-2xl mb-px tracking-wider font-medium text-main-dark">
            Exiting Life
          </span>
        </div>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={menuIcon} alt="A menu icon" className="w-7" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-96 bg-[#F6F2FF] mt-1">
          <div id="version-menu-header" className="flex justify-between">
            <DropdownMenuLabel className="text-lg text-main-dark cursor-default">
              Версии
            </DropdownMenuLabel>
            {versionsData.length != 0 && !isLoading ? (
              <Link to="/versions">
                <DropdownMenuItem className="text-main-purple cursor-pointer">
                  Больше версий
                </DropdownMenuItem>
              </Link>
            ) : null}
          </div>

          <div>
            <DropdownMenuLabel className="text-main-dark opacity-60 -mt-3 text-[14px] transition-none font-normal">
              Скачайте любую версию Exciting Life
            </DropdownMenuLabel>
          </div>

          {isLoading ? (
            <DropdownMenuItem className="flex justify-between">
              <Skeleton className="w-[100px] h-[100px] rounded-md bg-main-dark bg-opacity-10" />
              <Skeleton className="w-[100px] h-[100px] rounded-md bg-main-dark bg-opacity-10" />
              <Skeleton className="w-[100px] h-[100px] rounded-md bg-main-dark bg-opacity-10" />
            </DropdownMenuItem>
          ) : versionsData.length === 0 ? (
            <DropdownMenuLabel>
              <div className="mt-1 mb-1 w-full flex flex-col items-center justify-center gap-2">
                <p className="font-normal">
                  Произошла ошибка, повторите попытку позже
                </p>
                <Button
                  onClick={getVersions}
                  className="hover:bg-[#350E8A] bg-main-purple"
                >
                  Повторить
                </Button>
              </div>
            </DropdownMenuLabel>
          ) : (
            <DropdownMenuItem className="flex justify-between">
              {versionsData.map((versionObj) => {
                return (
                  <MenuCard key={versionObj.version}>
                    <Link
                      className="w-full h-full flex justify-center items-center"
                      to={`/versions/${versionObj.version}`}
                    >
                      <span>{versionObj.version}</span>
                    </Link>
                  </MenuCard>
                );
              })}

              {versionsData.length === 1 && (
                <>
                  <MenuCard className="pointer-events-none bg-main-dark bg-opacity-5">
                    <span>Скоро...</span>
                  </MenuCard>
                  <MenuCard className="pointer-events-none bg-main-dark bg-opacity-5">
                    <span>Скоро...</span>
                  </MenuCard>
                </>
              )}

              {versionsData.length === 2 && (
                <>
                  <MenuCard className="pointer-events-none bg-main-dark bg-opacity-5">
                    <span>Скоро...</span>
                  </MenuCard>
                </>
              )}
            </DropdownMenuItem>
          )}

          <DropdownMenuSeparator className="bg-main-dark opacity-5 mt-2"></DropdownMenuSeparator>

          <DropdownMenuLabel className="text-lg text-main-dark">
            Наши соцсети
          </DropdownMenuLabel>

          <DropdownMenuItem className="text-main-dark opacity-60 -mt-3 text-[14px]">
            Свяжитесь с нами!
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-between hover:none mb-2 !hover:none">
            <MenuCard>
              <img src={telegramLogo} alt="A telegram logo" />
              <span className="text-sm text-main-dark font-normal">
                Telegram
              </span>
            </MenuCard>
            <MenuCard>
              <img src={telegramLogo} alt="A telegram logo" />
              <span className="text-sm text-main-dark font-normal">
                Telegram
              </span>
            </MenuCard>
            <MenuCard>
              <img src={telegramLogo} alt="A telegram logo" />
              <span className="text-sm text-main-dark font-normal">
                Telegram
              </span>
            </MenuCard>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
