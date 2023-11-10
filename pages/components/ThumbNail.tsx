import { similarMovies } from "@/Interfaces/interface";
import { imageURL } from "@/config";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ThumbNail: React.FC<{ similar: similarMovies }> = ({ similar }) => {
  const router = useRouter();
  return (
    <div className="w-[100%] mt-4 sm:mt-1 cursor-pointer px-3">
      <Image
        key={similar?.id}
        onClick={() => router.push(`/movies/${similar?.id}`)}
        width={100}
        height={100}
        src={
          similar?.poster_path === null
            ? "https://sanquentinnews.com/wp-content/uploads/2021/03/no-image.jpeg"
            : `${imageURL}${similar?.poster_path}`
        }
        style={{
          width: "100%",
          maxHeight: "300px",
          borderRadius: "5px",
          transition: "all 250ms ease-in-out 0s",
          cursor: "pointer",
        }}
        alt=""
      />
    </div>
  );
};

export default ThumbNail;
