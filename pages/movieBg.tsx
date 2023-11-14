import { casts, singleMovie } from "@/Interfaces/interface";
import { imageURL } from "@/config";
import React, { useEffect, useState } from "react";
import MoreDetails from "./MoreDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieBg: React.FC<{ moviesData: singleMovie; casts: any[] }> = ({
  moviesData,
  casts,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (moviesData === null || casts === undefined) {
      toast.error("Error 404 ");
      router.push("/movies");
    }
  }, [moviesData, casts, router]);

  const [movieCast, showMovieCast] = useState<boolean>(false);

  const castToDisplay = movieCast ? casts : casts?.slice(0, 4);

  return (
    <>
      <header
        className="text-[#e5e5e5] p-1 object-contain h-[200px] sm:h-[400px] lg:h-[900px]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(24, 24, 24, 1) 15%, transparent 60%), url(${imageURL}${moviesData?.backdrop_path})`,
          // backgroundImage: `linear-gradient(to left, rgba(24, 24, 24, 0) 30%, #181818 70%), url(${imageURL}${moviesData?.backdrop_path})`,
          // backgroundImage: `linear-gradient(to right, rgba(24, 24, 24, 0.7) 50%, transparent 40%), url(${imageURL}${moviesData?.backdrop_path})`,

          // backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.1) 20%, transparent 80%), url(${imageURL}${moviesData?.backdrop_path})`,,,

          filter: "saturate(1.5) grayscale(20%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
        }}
      >
        <div className=" ml-[8px] sm:ml-[20px] mt-[200px] sm:mt-[100px] lg:mt-[210px] h-[190px]">
          <div className="font-bold uppercase tracking-widest cursor-pointer text-[#FFF] max-w-[100%] pb-[4.8px] text-4xl ">
            {/* <img
              // src="https://tinyurl.com/5n6bcp6s"
              src="https://shorturl.at/fvBFW"
              className="sm:w-[30%] max-w-[80%]"
              alt=""
            /> */}
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
              alt=""
              width={10}
              height={10}
              style={{
                width: "30%",
                maxWidth: "80%",
              }}
            />
          </div>

          <div className=" flex flex-col sm:mt-[50px] mt-[20px]">
            <h2 className="font-bold capitalize text-xl tracking-widest cursor-pointer text-[#FFF]">
              {moviesData?.original_title}
            </h2>
            <div className="flex gap-3 text-sm text-gray-400 mt-[10px]">
              <span>{new Date(moviesData?.release_date).getFullYear()} </span>|
              <span className="border t border-gray-500 px-[10px]">
                {/* {moviesData?.adult === false ? "16+" : "18+"} */}
                {moviesData?.genres?.some((genre) => genre?.id === 27) ||
                moviesData?.adult === true ? (
                  <span>18+</span>
                ) : (
                  <span>16+</span>
                )}
              </span>
              |<span>{moviesData?.runtime}m</span>
              <span>
                {moviesData?.genres
                  ? `| ${moviesData.genres
                      .map((genre) => genre.name)
                      .join(" | ")} |`
                  : ""}
              </span>
            </div>
          </div>
          <div className="w-[550px] flex flex-col gap-4 mt-3 max-w-[100%] text-justify tracking-tighter">
            <p className="truncate-sm">{moviesData?.overview}</p>
            <div className="flex gap-1 flex-col">
              <div className="flex gap-1">
                <span className="text-gray-500">Starring:</span>
                <div className="flex flex-col">
                  {castToDisplay
                    ?.map((cast: casts) => cast?.original_name)
                    .join(", ")}
                  {casts?.length > 4 && (
                    <p
                      className=" cursor-pointer text-blue-500 underline"
                      onClick={() => showMovieCast(!movieCast)}
                    ></p>
                  )}
                </div>
              </div>

              <span className="text-gray-500">
                Production Company:
                <span className="text-white">
                  {moviesData?.production_companies
                    ?.map((data) => data?.name)
                    .join(", ")}
                </span>
              </span>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <div className="banner--fadebottom"></div> */}
      </header>
      <MoreDetails
        tagline={moviesData?.tagline}
        genres={moviesData?.genres}
        spoken_language={moviesData?.spoken_languages}
        casts={casts}
        Id={moviesData?.id.toString()}
      />
    </>
  );
};

export default MovieBg;
