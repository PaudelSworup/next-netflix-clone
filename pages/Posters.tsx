import { moviesData } from "@/Interfaces/interface";
import { imageURL } from "@/config";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Posters: React.FC<{ movieData: moviesData; isLargeRow: any }> = ({
  movieData,
  isLargeRow,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Image
      key={movieData?.id}
      onClick={() => router.push(`/movies/${movieData?.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={`${imageURL}${
        isLargeRow ? movieData?.backdrop_path : movieData.poster_path
      }`}
      alt=""
      width={300}
      height={100}
      style={{
        objectFit: "contain",
        width: "100%",
        maxHeight: isLargeRow ? "300px" : "200px",
        borderRadius: "0.125rem",
        transition: "all 250ms ease-in-out 0s",
        maxWidth: isLargeRow ? "300px" : "auto",
        transform: isHovering ? "scale(1.1)" : "scale(1)",
      }}
    />
  );
};

export default Posters;
