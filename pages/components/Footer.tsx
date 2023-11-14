import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-4">
      <p className="text-[#6D6E75] text-center w-[550px]">
        Webapp developed by{" "}
        <Link target="_blank" href="https://sworup-kc.vercel.app/">
          Sworup Kc
        </Link>{" "}
        -This project is exclusively created for educational and portfolio
        showcase purposes, with no commercial intentions. All rights and
        copyrights are retained by Netflix.
        <br />
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <Image
        // className="object-contain w-[100px]"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="The Movie Db Logo"
        width={10}
        height={10}
        style={{ objectFit: "contain", width: "100px" }}
      />
    </footer>
  );
};

export default Footer;
