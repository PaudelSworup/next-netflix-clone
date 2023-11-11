import {
  action,
  animation,
  comedy,
  getNetflixOriginals,
  getPopular,
  getTrending,
  horror,
  mystery,
  nowPlaying,
  scifi,
  topRated,
  tv,
  upComing,
  western,
} from "@/APIs/moviesAPI";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import Footer from "../components/Footer";
import { useAppSelector } from "@/Store/store";
import Row from "../components/Row";
import { useQueries } from "react-query";

const Movies = ({
  trending,
  originals,
  popular,
  rated,
  western,
  comedy,

  animation,
  horror,
  scifi,

  mystery,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
      queryKey: ["western"],
      queryFn: async () => await western(),
    },

    {
      queryKey: ["animation"],
      queryFn: async () => await animation(),
    },

    {
      queryKey: ["comedy"],
      queryFn: async () => await comedy(),
    },

    {
      queryKey: ["scifi"],
      queryFn: async () => await scifi(),
    },

    {
      queryKey: ["horror"],
      queryFn: async () => await horror(),
    },

    {
      queryKey: ["mystery"],
      queryFn: async () => await mystery(),
    },

    {
      initialData: {
        data: {
          trending,
          originals,
          popular,
          rated,
          western,
          comedy,

          animation,
          horror,
          scifi,

          mystery,
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
        <Row movie={originals} title="Netflix Originals" isLargeRow={true} />
        <Row movie={trending} title="Trending Now" isLargeRow={false} />
        <Row movie={popular} title="Most Popular" isLargeRow={false} />
        <Row movie={rated} title="Top Rated" isLargeRow={false} />
        {/* <Row movie={np} title="Now Playing" isLargeRow={false} /> */}
        <Row movie={western} title="Western" isLargeRow={false} />
        <Row movie={comedy} title="Comedy" isLargeRow={false} />
        <Row movie={animation} title="Animation" isLargeRow={false} />
        <Row movie={horror} title="Horror" isLargeRow={false} />
        <Row movie={mystery} title="Mystery" isLargeRow={false} />
        <Row movie={scifi} title="SCIFI" isLargeRow={false} />
        {/* <Row movie={romance} title="Romance" isLargeRow={false} /> */}

        {/* <Row movie={uc} title="Up Coming" isLargeRow={false} /> */}
        <Footer />
      </div>
    </>
  );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const trending = await getTrending();

  const netflixOriginals = await getNetflixOriginals();

  const popular = await getPopular();

  const top_rated = await topRated();

  const westernM = await western();

  const comedyM = await comedy();

  const animationM = await animation();

  const horrorM = await horror();

  const mysteryM = await mystery();

  const scifiM = await scifi();

  return {
    props: {
      trending: trending?.data?.movies,
      originals: netflixOriginals?.data?.movies,
      popular: popular?.data?.movies,
      rated: top_rated?.data?.movies,
      western: westernM?.data?.movies,
      comedy: comedyM?.data?.movies,

      animation: animationM?.data?.movies,
      horror: horrorM?.data?.movies,

      mystery: mysteryM?.data?.movies,
      scifi: scifiM?.data?.movies,
    },
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const trending = await getTrending();

//   const netflixOriginals = await getNetflixOriginals();

//   const popular = await getPopular();

//   const top_rated = await topRated();

//   const now_playing = await nowPlaying();

//   const upcoming = await upComing();

//   const westernM = await western();

//   const comedyM = await comedy();

//   const actionM = await action();

//   const animationM = await animation();

//   const horrorM = await horror();

//   const tvShows = await tv();

//   const mysteryM = await mystery();

//   const scifiM = await scifi();

//   const romanceM = await romance();

//   return {
//     props: {
//       trending: trending?.data?.movies,
//       originals: netflixOriginals?.data?.movies,
//       popular: popular?.data?.movies,
//       rated: top_rated?.data?.movies,
//       np: now_playing?.data?.movies,
//       uc: upcoming?.data?.movies,
//       western: westernM?.data?.movies,
//       comedy: comedyM?.data?.movies,
//       action: actionM?.data?.movies,
//       animation: animationM?.data?.movies,
//       horror: horrorM?.data?.movies,
//       tv: tvShows?.data?.movies,
//       mystery: mysteryM?.data?.movies,
//       scifi: scifiM?.data?.movies,
//       romance: romanceM?.data?.movies,
//     },
//   };
// };
