import {
  action,
  animation,
  comedy,
  getMovieCast,
  getNetflixOriginals,
  getPopular,
  getSingleMovie,
  getTrending,
  horror,
  mystery,
  nowPlaying,
  romance,
  scifi,
  topRated,
  tv,
  upComing,
  western,
} from "@/APIs/moviesAPI";
import { movies } from "@/Interfaces/interface";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import MovieBg from "../movieBg";
import Nav from "../Nav";
import Footer from "../components/Footer";

const MovieDetails = ({
  movies,
  cast,
}: {
  movies: any;
  cast?: any;
}): InferGetStaticPropsType<typeof getStaticProps> => {
  const router = useRouter();
  const movieId = router.query.movieId as string;

  return (
    <>
      <Nav />
      <MovieBg moviesData={movies} casts={cast} />
      <Footer />
    </>
  );
};

export default MovieDetails;

export async function getStaticPaths() {
  // console.log("id", useRouter().query.movieId);
  const trendingResponse = await getTrending();
  const originalsResponse = await getNetflixOriginals();
  const topratedResponse = await topRated();
  const popularResponse = await getPopular();
  const npResponse = await nowPlaying();
  const upcoming = await upComing();
  const romanceRes = await romance();
  const animationRes = await animation();
  const scifiRes = await scifi();
  const actionRes = await action();
  const horrorRes = await horror();
  const mysteryRes = await mystery();
  const westernRes = await western();
  const comedyRes = await comedy();
  const tvRes = await tv();
  // const similarResponse = await getSimilarMovies("i need movie id here")

  const trending = (await trendingResponse?.data?.movies) || [];
  const original = (await originalsResponse?.data?.movies) || [];
  const tr = (await topratedResponse?.data?.movies) || [];
  const popular = (await popularResponse?.data?.movies) || [];
  const np = (await npResponse?.data?.movies) || [];

  const uc = (await upcoming?.data?.movies) || [];

  const romance_res = (await romanceRes?.data?.movies) || [];
  const horror_res = (await horrorRes?.data?.movies) || [];
  const animation_res = (await animationRes?.data?.movies) || [];
  const scifi_res = (await scifiRes?.data?.movies) || [];
  const action_res = (await actionRes?.data?.movies) || [];
  const mystery_res = (await mysteryRes?.data?.movies) || [];
  const western_res = (await westernRes?.data?.movies) || [];
  const comedy_res = (await comedyRes?.data?.movies) || [];
  const tv_res = (await tvRes?.data?.movies) || [];

  const datas = [
    ...trending,
    ...original,
    ...tr,
    ...popular,
    ...np,
    ...uc,
    ...romance_res,
    ...horror_res,
    ...animation_res,
    ...scifi_res,
    ...action_res,
    ...mystery_res,
    ...western_res,
    ...comedy_res,
    ...tv_res,
  ];

  const paths = datas?.map((movie: movies) => {
    return {
      params: {
        movieId: `${movie?.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const movieId = params?.movieId as string;

  console.log(movieId);
  try {
    const data = await getSingleMovie(movieId);
    const casts = await getMovieCast(movieId);

    console.log("movie", data?.data?.movies);

    console.log("cast", casts?.data?.movies);

    return {
      props: {
        movies: data?.data?.movies,
        cast: casts?.data?.movies,
      },
    };
  } catch (err: any) {
    if (err.response) {
      console.log("Error Message:", err.message);
      console.log("Error Code:", err.response.status);
    } else {
      console.error("Generic Error:", err.message);
      console.error("Error Code:", err.code);
    }
    // console.log("err is", err);

    return {
      props: {
        movies: null,
      },
    };
  }
};
