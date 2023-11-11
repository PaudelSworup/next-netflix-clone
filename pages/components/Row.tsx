import { movies } from "@/Interfaces/interface";
import React, { useState } from "react";
import Posters from "../Posters";

const Row: React.FC<{ movie: any; title: string; isLargeRow: boolean }> = ({
  movie,
  title,
  isLargeRow,
}) => {
  return (
    <>
      <h2 className="text-white tracking-widest sm:ml-2 text-xl">{title}</h2>
      <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
        {movie?.map((movie: movies) => {
          return (
            <Posters
              key={movie?.id}
              movieData={movie}
              isLargeRow={isLargeRow}
            />
          );
        })}
      </div>
    </>
  );
};

export default Row;
