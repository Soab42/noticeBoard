import React from "react";

export default function SingleLink({ folder, data }) {
  const handleDownload = () => {
    const filename = folder + "/" + data.name;
    // Replace with the actual filename
    // console.log(`Downloading ${filename}`);
    window.open(`/api/download?filename=${filename}`, "_blank");
  };
  // console.log(data);
  return (
    <div className="w-[49%] shadow-md p-2 flex justify-between gap-1 hover:shadow-xl text-blue-600 hover:animate-pulse cursor-pointer text-center px-2">
      <div onClick={handleDownload} className="">
        {data?.name}
      </div>

      <div>{data.createdAt}</div>
    </div>
  );
}
