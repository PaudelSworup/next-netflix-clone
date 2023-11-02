import { similarMovies } from "@/Interfaces/interface";
import { imageURL } from "@/config";
import { useRouter } from "next/router";
import React from "react";

const ThumbNail: React.FC<{ similar: similarMovies }> = ({ similar }) => {
  const router = useRouter();
  return (
    <div className="w-[100%] mt-4 sm:mt-1 cursor-pointer px-3">
      <img
        key={similar?.id}
        onClick={() => router.push(`/movies/${similar?.id}`)}
        className="w-full max-h-[300px] rounded-sm transition-all duration-250 ease-in-out delay-0"
        src={
          similar?.poster_path === null
            ? "https://sanquentinnews.com/wp-content/uploads/2021/03/no-image.jpeg"
            : `${imageURL}${similar?.poster_path}`
        }
        alt=""
      />
    </div>
  );
};

export default ThumbNail;
