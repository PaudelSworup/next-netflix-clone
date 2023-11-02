import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { FaSignOutAlt, FaCog } from "react-icons/fa";

type drop = {
  id: number;
  idName: string;
  span: string;
  icon?: any;
  onClick?: () => void;
};

const DropMenu = () => {
  const router = useRouter();
  const handleLogout = () => {
    console.log("hello");
    sessionStorage.removeItem("netflixUser");
    Cookies.remove("token");
    router.push("/");
  };
  const drop = [
    {
      id: 1,
      idName: "Logout",
      span: "Logout",
      icon: <FaSignOutAlt className="mr-2" />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="absolute z-20 top-10 right-3 bg-white rounded-md shadow-lg py-2 ">
      {drop?.map((data: drop) => (
        <div
          key={data.id}
          className="px-4 py-2 w-48 cursor-pointer flex items-center hover:bg-gray-400"
          onClick={data.onClick}
        >
          <span>{data.icon}</span>
          <span>{data.span}</span>
        </div>
      ))}
    </div>
  );
};

export default DropMenu;
