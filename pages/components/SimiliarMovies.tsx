import { getSimilarMovies } from "@/APIs/moviesAPI";
import React from "react";
import { useQuery } from "react-query";
import ThumbNail from "./ThumbNail";
import { similarMovies } from "@/Interfaces/interface";

const SimiliarMovies: React.FC<{
  id?: string;
}> = ({ id }) => {
  //   const ID = id?.toString();

  const res = useQuery(
    ["similarMovies", id],
    async () => await getSimilarMovies(id as string),
    {
      onSuccess: (data) => console.log("inside success", data?.data?.movies),
      onError: (err) => console.log("inside success", err),
    }
  );

  return (
    <div className=" lg:px-36   sm:grid md:grid-cols-2 xl:grid-cols-4 overflow-x-scroll gap-4 scrollbar_hide py-4">
      {res?.data?.data?.movies.map((movie: similarMovies) => (
        <ThumbNail key={movie.id} similar={movie} />
      ))}
    </div>
  );
};

export default SimiliarMovies;
