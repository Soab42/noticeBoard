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
    <div className="flex justify-between items-center  xl:p-2 xl:px-4 p-1.5 backdrop-blur-sm bg-[rgba(60,158,111,0.2)] rounded-md xl:h-24 md:h-24 h-14 min-w-full">
      <div className="flex flex-col xl:gap-2 py-1">
        <div className="flex justify-between xl:text-xl text-xs pl-3 text-[#1c86d1]">
          {data?.name}
          <p>{data.createdAt}</p>
        </div>
        <div className="flex justify-between text-center items-center">
          <div className="tagList">
            {tag.map((x, i) => (
              <p className="tag" key={i}>
                {x}
              </p>
            ))}
          </div>
          {data?.createdAt && (
            <div className="hidden text-[#1aad7ce1] text-xs">
              Published On:
              {moment(date).format("ll")}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center p-1 gap-2">
        <button
          type="submit"
          className="xl:px-7 px-1.5 xl:h-8 h-5 rounded text-slate-600 text-xs xl:text-sm xl:font-semibold bg-[#1aad7ce1] hover:bg-[#2bd99fe1] hover:text-[#02200de1] shadow-md"
          onClick={handleDownload}
        >
          Download
        </button>
        <div className="w-44 rounded-md h-20 bg-[#0C3F60] hidden xl:block md:block">
          {/* <FileViewer fileType={type} filePath={file} /> */}
        </div>
      </div>
    </div>
  );
}
