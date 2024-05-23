import { Button } from "./ui/button";
import downloadIcon from "../assets/arrow_down.svg";
import { saveAs } from "file-saver";

export default function LandingPage() {
  async function handleDownloadLatest() {
    const rawData = await fetch(
      "https://nodejs-serverless-function-exl-website.vercel.app/api/latest_version"
    );
    const latestVersionObject = await rawData.json();
    saveAs(latestVersionObject[0].downloadUrl);
  }

  return (
    <div id="landing-page">
      <h1 className="text-5xl font-medium relative text-main-dark mt-20">
        Играй в жизнь -
      </h1>
      <h2 className="text-4xl font-medium relative text-main-dark mt-2">
        Двигайся вперёд.
      </h2>
      <h2 className="relative text-2xl font-normal opacity-70 text-main-dark mt-8">
        Приложение, которое превратит вашу рутину в развлечение
      </h2>

      <Button
        className="relative bg-main-purple flex gap-1 hover:bg-[#350E8A] mt-12 h-14 w-[10.5rem] mb-5"
        onClick={handleDownloadLatest}
      >
        <img src={downloadIcon} alt="" className="w-6 mt-1 -ml-1" />
        <span className="text-2xl tracking-wide">Скачать</span>
      </Button>

      <a
        href=""
        className=" text-main-purple relative text-xl hover:text-[#350E8A]"
      >
        Перейти к версиям
      </a>
    </div>
  );
}
