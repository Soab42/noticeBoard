import { data } from "autoprefixer";
import moment from "moment/moment";
import React from "react";

export default function SingleFile({ folder, data }) {
  const tag = data?.tag || [];
  const handleDownload = () => {
    const filename = folder + "/" + data.name;
    // Replace with the actual filename
    // console.log(`Downloading ${filename}`);
    window.open(`/api/download?filename=${filename}`, "_blank");
  };
  const date = data.createdAt;
  return (
    <div className="flex justify-between items-center  p-2 px-4 backdrop-blur-sm bg-[rgba(60,158,111,0.2)] rounded-md h-24 w-full">
      <div className=" w-full grid gap-2 pr-16">
        <p className="text-xl pl-3 text-[#1c86d1]">{data?.name}</p>
        <div className="flex justify-between text-center items-center">
          <div className="tagList">
            {tag.map((x, i) => (
              <p className="tag" key={i}>
                {x}
              </p>
            ))}
          </div>
          {data?.createdAt && (
            <div className="justify-end text-[#1aad7ce1]">
              Published On: {moment(date).format("ll")}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center p-1 gap-4">
        <button
          type="submit"
          className="px-7 h-8 rounded text-slate-600 text-sm font-semibold bg-[#1aad7ce1] hover:bg-[#2bd99fe1] hover:text-[#02200de1] shadow-md"
          onClick={handleDownload}
        >
          Download
        </button>
        <div className="w-44 rounded-md h-20 bg-[#0C3F60]">
          {/* <FileViewer fileType={type} filePath={file} /> */}
        </div>
      </div>
    </div>
  );
}
