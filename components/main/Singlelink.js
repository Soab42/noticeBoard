import React from "react";

export default function SingleLink({ data }) {
  const handleDownload = () => {
    const filename = data.name;
    // Replace with the actual filename
    // console.log(`Downloading ${filename}`);
    window.open(`/api/download?filename=${filename}`, "_blank");
  };
  // console.log(data);
  return (
    <div className="w-full shadow-md p-2 flex justify-between gap-1 hover:shadow-xl text-sky-500 hover:animate-pulse cursor-pointer text-center px-2">
      <div onClick={handleDownload} className="">
        {data?.name}
      </div>

      <div>{data.createdAt}</div>
    </div>
  );
}
