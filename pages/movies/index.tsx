import {
  getNetflixOriginals,
  getPopular,
  getTrending,
  nowPlaying,
  topRated,
  upComing,
} from "@/APIs/moviesAPI";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { movies } from "@/Interfaces/interface";
import Posters from "../Posters";
import Nav from "../Nav";
import Banner from "../Banner";
import Link from "next/link";
import Footer from "../components/Footer";
import { useAppSelector } from "@/Store/store";

const Movies = ({
  trending,
  originals,
  popular,
  rated,
  np,
  uc,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const results = useQueries([
    {
      queryKey: ["trending"],
      queryFn: async () => await getTrending(),
    },

    {
      queryKey: ["originals"],
      queryFn: async () => await getNetflixOriginals(),
    },

    {
      queryKey: ["popular"],
      queryFn: async () => await getPopular(),
    },

    {
      queryKey: ["rated"],
      queryFn: async () => await topRated(),
    },

    {
      queryKey: ["np"],
      queryFn: async () => await nowPlaying(),
    },

    {
      queryKey: ["uc"],
      queryFn: async () => await upComing(),
    },

    {
      initialData: {
        data: {
          trending,
          originals,
          popular,
          rated,
          np,
          uc,
        },
      },
    },
  ]);

  const { username } = useAppSelector((state) => state.auth);
  const [user, setUser] = useState<string | null>("");

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Nav />
      <Banner />
      <div className="w-[100%] cursor-pointer">
        <h2 className="text-white tracking-widest text-xl">
          Netflix Originals
        </h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {originals?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={true} />
            );
          })}
        </div>

        <h2 className="text-white tracking-widest text-xl">Trending Now</h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {trending?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={false} />
            );
          })}
        </div>

        <h2 className="text-white tracking-widest text-xl">Most Popular</h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {popular?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={false} />
            );
          })}
        </div>

        <h2 className="text-white tracking-widest text-xl">Top Rated</h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {rated?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={false} />
            );
          })}
        </div>

        <h2 className="text-white tracking-widest text-xl">Now Playing</h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {np?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={false} />
            );
          })}
        </div>

        <h2 className="text-white tracking-widest text-xl">UpComing</h2>
        <div className="flex gap-3 scrollbar_hide overflow-x-scroll p-[20px] ">
          {uc?.map((movie: movies) => {
            return (
              <Posters key={movie?.id} movieData={movie} isLargeRow={false} />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

// object-contain w-[100%] max-h-[150px] rounded-sm ml-[10px] transition-all duration-250 ease-in-out delay-0

export default Movies;

export const getStaticProps: GetStaticProps = async (context) => {
  const trending = await getTrending();

  const netflixOriginals = await getNetflixOriginals();

  const popular = await getPopular();

  const top_rated = await topRated();

  const now_playing = await nowPlaying();

  const upcoming = await upComing();

  return {
    props: {
      trending: trending?.data?.movies,
      originals: netflixOriginals?.data?.movies,
      popular: popular?.data?.movies,
      rated: top_rated?.data?.movies,
      np: now_playing?.data?.movies,
      uc: upcoming?.data?.movies,
    },
  };
};
