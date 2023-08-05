import React from "react";

export default function SingleLink({ data }) {
  const handleDownload = () => {
    // console.log(data);
    const filename = data.name;
    // Replace with the actual filename
    // console.log(`Downloading ${filename}`);
    window.open(`/api/download?filename=${filename}`);
  };
  // console.log(data);
  return (
    <div
      className="w-full shadow-md p-2 flex justify-between gap-1 hover:shadow-xl text-sky-400 hover:bg-sky-500 duration-500 hover:text-sky-800 cursor-pointer text-center px-2"
      onClick={handleDownload}
    >
      <div className="">{data?.name}</div>

      <div>{data.createdAt}</div>
    </div>
  );
}
