import Head from "next/head";
import Login from "./components/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </>
  );
}
