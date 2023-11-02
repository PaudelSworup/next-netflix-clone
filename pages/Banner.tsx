import { getNetflixOriginals, getTrending } from "@/APIs/moviesAPI";
import { movies } from "@/Interfaces/interface";
import { API, imageURL } from "@/config";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Banner = () => {
  const [banner, setBanner] = useState<movies>();

  const res = useQuery(["banner"], async () => await getTrending(), {
    onSuccess: (data) =>
      setBanner(
        data?.data?.movies[
          Math.floor(Math.random() * data?.data?.movies?.length - 1)
        ]
      ),
  });

  return (
    <header
      className="text-[#e5e5e5] p-3 object-contain h-[450px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(37, 37, 37, 0.1), rgba(37, 37, 37, 0.9)),url(${imageURL}${banner?.backdrop_path})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[20px] pt-[110px] h-[190px]">
        <h1 className="font-bold uppercase tracking-widest cursor-pointer text-[#FFF] pb-[4.8px] text-4xl ">
          {banner?.title ||
            banner?.name ||
            banner?.original_name ||
            banner?.original_title}
        </h1>

        <div className="banner_buttons flex flex-wrap gap-1">
          <button className="cursor-pointer text-[#FFFDD0] outline-none border-none font-semibold px-[2rem] mr-[1rem] py-[0.5rem] tracking-widest uppercase font-serif bg-[rgba(51,51,51,0.5)] hover:text-[#000] transition-all duration-[0.2s] hover:bg-[#e5e5e5]">
            Play
          </button>
          <button className="cursor-pointer text-[#FFFDD0] outline-none border-none font-semibold px-[2rem] mr-[1rem] py-[0.5rem] tracking-widest uppercase font-serif bg-[rgba(51,51,51,0.5)] hover:text-[#000] transition-all duration-[0.2s] hover:bg-[#e5e5e5]">
            My List
          </button>
        </div>
        <div className="w-[500px] truncate mt-3 max-w-[100%] text-justify tracking-wider">
          {banner?.overview}
          {/* {overFlow(banner?.overview,150)} */}
        </div>
      </div>
      {/* <div className="banner--fadebottom"></div> */}
    </header>
  );
};

export default Banner;
