import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import PlaceholderCards from "./custom-ui/PlaceholderCards";
import { useFetch } from "@/hooks/useFetch";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

export default function VersionGroup() {
  const { versionGroupId } = useParams();
  const [fetchedData, isLoading] = useFetch(
    `https://nodejs-serverless-function-exl-website.vercel.app/api/${versionGroupId}`
  );

  console.log(fetchedData);

  return (
    <>
      <Navbar />
      <h2 className="font-normal text-2xl text-main-dark">
        Версия: {versionGroupId}
      </h2>
      <div className="flex justify-between flex-wrap gap-y-4 mt-6">
        {isLoading && <PlaceholderCards />}
        {fetchedData.length !== 0 &&
          [...fetchedData].reverse().map((item) => {
            return (
              <Link key={item.id} to={`version/${item.version}`}>
                <Card className="w-[180px] min-h-28 h-fit bg-[#F6F2FF] text-main-dark gap-px flex flex-col justify-center pl-3 font-medium text-xl hover:bg-main-purple hover:bg-opacity-15 hover:cursor-pointer">
                  <span>{item.version}</span>
                  <span className="truncate line-clamp-2 text-sm font-normal text-main-dark opacity-70 text-wrap">
                    {item.title}
                  </span>
                  <span className="text-[12px] leading-5 text-main-dark opacity-60 font-normal italic">
                    {item.release_date}
                  </span>
                </Card>
              </Link>
            );
          })}
      </div>
    </>
  );
}
