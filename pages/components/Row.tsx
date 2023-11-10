import { movies } from "@/Interfaces/interface";
import React from "react";
import Posters from "../Posters";
import { title } from "process";

const Row: React.FC<{ movie: any; title: string; isLargeRow: boolean }> = (
  props
) => {
  return (
    <>
      <h2 className="text-white tracking-widest text-xl">{props.title}</h2>
      <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
        {props.movie?.map((movie: movies) => {
          return (
            <Posters
              key={movie?.id}
              movieData={movie}
              isLargeRow={props.isLargeRow}
            />
          );
        })}
      </div>
    </>
  );
};

export default Row;
