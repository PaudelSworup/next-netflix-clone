import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/Store/store";
import Link from "next/link";
import DropMenu from "./components/DropMenu";

const Nav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { username } = useAppSelector((state) => state.auth);

  const [user, setUser] = useState<string | null>("");

  const [dropMenu, setDropMenu] = useState<boolean>(false);

  const handleDropDown = () => {
    setDropMenu(!dropMenu);
  };

  useEffect(() => {
    setUser(username);
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [username]);

  return (
    <div
      className={`flex h-[0px] justify-between z-10 mt-0 sticky transition-transform duration-300 top-0 ${
        scrolled && "bg-[#111] h-[55px] m-0 pt-0 px-20px"
      }`}
    >
      <div className="p-2 cursor-pointer">
        {user != null || user != "" ? (
          <Link href="/movies">
            <Image src="/net.jpg" width={130} height={40} alt="" />
          </Link>
        ) : (
          <Image src="/net.jpg" width={130} height={40} alt="" />
        )}
      </div>

      <div className="p-2 cursor-pointer">
        <Image
          src="/av.png"
          width={40}
          height={40}
          alt=""
          onClick={handleDropDown}
        />
        {dropMenu && <DropMenu />}
      </div>
    </div>
  );
};

export default Nav;
