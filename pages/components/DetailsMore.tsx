import React from "react";

const DetailsMore: React.FC<{
  title: string;
  titleAns?: any;
}> = ({ title, titleAns }) => {
  console.log(titleAns === "");
  return (
    <div className="flex gap-4">
      <div className="flex flex-col mt-4">
        <p className="text-gray-500 text-lg">{title}</p>
        <p className="text-white ">{titleAns === "" ? "---" : titleAns}</p>
      </div>
    </div>
  );
};

export default DetailsMore;
