import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { Button } from "./ui/button";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

export default function DownloadPage() {
  const { versionGroupId, versionId } = useParams();
  const [fetchedData, isLoading] = useFetch(
    `https://nodejs-serverless-function-exl-website.vercel.app/api/${versionGroupId}`
  );
  const [currentObj, setCurrentObj] = useState({});

  useEffect(() => {
    if (fetchedData.length !== 0) {
      fetchedData.forEach((item) => {
        if (item.version === versionId) {
          setCurrentObj(item);
        }
      });
    }
  }, [fetchedData, versionId]);

  return (
    <>
      <Navbar />
      <div id="download-page-content-wrapper">
        <div
          id="loaderWrapper"
          className="w-full h-full flex items-start justify-start fixed top-[46%] left-[43%] -mt-[357.2] -ml-[215.2]"
        >
          <FadeLoader
            color="#672EE3"
            cssOverride={{ opacity: 0.6 }}
            loading={isLoading ? true : false}
          />
        </div>
        {Object.keys(currentObj).length !== 0 && (
          <>
            <div className="flex justify-between items-center">
              <h2 className="font-normal text-3xl text-main-dark">
                {versionId}
              </h2>
              <p className="opacity-80 text-main-dark">
                {currentObj.release_date}
              </p>
            </div>

            <p className="text-lg w-60 mt-2 opacity-90 text-main-dark">
              {currentObj.title}
            </p>

            <Button className="bg-main-purple hover:bg-[#350E8A] mt-3 text-lg p-6">
              Скачать
            </Button>

            <DropdownMenuSeparator className="bg-main-dark opacity-10 mt-5 w-[100vw] -ml-[24px]" />

            <div
              id="version-list-global-container"
              className="flex flex-col gap-2"
            >
              {currentObj.new[0] !== "" && (
                <div id="version-new-list-container">
                  <h3 className="mt-2 text-xl text-main-dark">Новое:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
                    {currentObj.new.map((item, index) => (
                      <li key={index} className="text-main-dark opacity-80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentObj.technical[0] !== "" && (
                <div id="version-technical-list-container">
                  <h3 className="mt-3 text-xl text-main-dark">
                    Технические изменения:
                  </h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
                    {currentObj.technical.map((item, index) => (
                      <li key={index} className="text-main-dark opacity-80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentObj.fixes[0] !== "" && (
                <div id="version-fixes-list-container">
                  <h3 className="mt-3 text-xl text-main-dark">Исправления:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
                    {currentObj.fixes.map((item, index) => (
                      <li key={index} className="text-main-dark opacity-80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
