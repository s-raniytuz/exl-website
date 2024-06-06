import Navbar from "./Navbar";
import { useFetch } from "@/hooks/useFetch";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import PlaceholderCards from "./custom-ui/PlaceholderCards";

export default function MoreVersions() {
  const [fetchedData, isLoading] = useFetch(
    "https://nodejs-serverless-function-exl-website.vercel.app/api/app_versions"
  );

  return (
    <>
      <Navbar />
      <h2 className="font-normal text-2xl text-main-dark">Все версии</h2>
      <div className="flex justify-between flex-wrap gap-y-4 mt-6">
        {isLoading && (
          <>
            <PlaceholderCards />
          </>
        )}
        {fetchedData.length !== 0 &&
          fetchedData.map((item) => {
            return (
              <Link key={item.version} to={`/versions/${item.version}`}>
                <Card className=" w-[180px] h-28 bg-[#F6F2FF] text-main-dark flex flex-col items-center justify-center font-medium text-xl hover:bg-main-purple hover:bg-opacity-15 hover:cursor-pointer">
                  <p>{item.version}</p>
                  <p className="text-[14px] font-normal text-main-dark opacity-60">
                    Апр 2024 - Сент 2024
                  </p>
                </Card>
              </Link>
            );
          })}
        {fetchedData.length == 0 && !isLoading && (
          <p className="bg-red-200 p-5 rounded-md">
            Произошла ошибка. Повторите попытку позже
          </p>
        )}
      </div>
    </>
  );
}
