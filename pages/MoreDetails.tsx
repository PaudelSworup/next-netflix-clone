import React from "react";
import DetailsMore from "./components/DetailsMore";
import { casts } from "@/Interfaces/interface";
import SimiliarMovies from "./components/SimiliarMovies";

const MoreDetails: React.FC<{
  tagline: string;
  genres: any;
  spoken_language: any;
  casts: any;
  Id?: string;
}> = ({ tagline, genres, spoken_language, casts, Id }) => {
  const genreString = genres?.map((genre: any) => genre?.name).join(",");

  const language_spoken = spoken_language
    ?.map((language: any) => language?.english_name)
    .join(",");

  return (
    <>
      <div className="text-white more__details p-3">
        <h2 className="text-3xl tracking-widest lg:px-36">More Details</h2>
        <div className="flex  lg:px-36 flex-wrap lg:gap-10 justify-between">
          <DetailsMore title="Watch offline" titleAns="Available to download" />

          <DetailsMore title="genres" titleAns={genreString} />

          <DetailsMore title="tagline" titleAns={tagline} />

          <DetailsMore title="Audio" titleAns={language_spoken} />
        </div>

        <div className="flex flex-col mt-10  lg:px-36">
          <p className="text-gray-500 text-xl">cast</p>
          <div className="text-white flex flex-wrap justify-between gap-4">
            {casts?.map((cast: casts) => (
              <span key={cast.id} className="sm:w-[18%]">
                {cast?.original_name}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-3xl tracking-widest sm:px-36 mt-20">
          More Like This
        </h2>
        <SimiliarMovies id={Id?.toString()} />
      </div>
    </>
  );
};

export default MoreDetails;
