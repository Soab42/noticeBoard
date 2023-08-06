"use client";
import moment from "moment/moment";
import React from "react";
import { ref, deleteObject } from "firebase/storage";
import { BsDownload } from "react-icons/bs";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { storage } from "@firebase2";
import { useDispatch } from "react-redux";
import { useDeleteDataMutation } from "@features/database/dbApi";
import EditModal from "./EditModal";

export default function SingleFileDatabase({ data }) {
  const [deleteData, {}] = useDeleteDataMutation();
  const tag = data?.tags || [];
  const handleDownload = () => {
    const filename = data.name;
    // Replace with the actual filename
    // console.log(`Downloading ${filename}`);
    window.open(`/api/download?filename=${filename}`);
  };
  // console.log(data);
  const { category, name } = data;
  const handleEdit = () => {};
  const handleDelete = () => {
    // // Create a reference to the file to delete
    const desertRef = ref(storage, category + "/" + name);
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        deleteData(data);
        console.log("data deleted successfully");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  const date = data.createdAt;
  const limit = window.screen.width > 600 ? 10 : 2;
  // console.log(limit);
  return (
    <div className="flex justify-between items-center  xl:p-2 xl:px-4 p-1.5 backdrop-blur-sm bg-[rgba(60,158,111,0.2)] rounded-md xl:h-24 md:h-24 h-14 w-full">
      <div className="flex flex-col xl:gap-2 py-1 w-full xl:pr-6">
        <div className="flex justify-between xl:text-xl text-xs pl-3 text-sky-500">
          {data?.name}
          <p className="xl:hidden">{data.createdAt}</p>
        </div>
        <div className="flex justify-between text-center items-center">
          <div className="tagList">
            {tag.slice(0, limit).map((x, i) => (
              <p className="tag" key={i}>
                {x}
              </p>
            ))}
          </div>
          {data?.createdAt && (
            <div className="hidden xl:block text-[#1aad7ce1] text-xs xl:text-lg">
              Published On:
              <span className="pl-1">{moment(date).format("ll")}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center p-1 gap-2">
        <button
          type="submit"
          className="px-7  h-8 rounded text-slate-600 text-sm font-semibold bg-[#1aad7ce1] hover:bg-[#2bd99fe1] hover:text-[#02200de1] flex justify-center items-center gap-2 shadow-md duration-300"
          onClick={handleDownload}
        >
          <BsDownload /> Download
        </button>
        <div className="flex rounded-md h-20 gap-2 justify-center items-center">
          {/* <button
            className="px-7  h-8 rounded text-slate-600 text-sm font-semibold bg-[#1aad7ce1] hover:bg-[#3ef4fae1] hover:text-[#02200de1] shadow-md flex justify-center items-center gap-2 duration-300"
            onClick={handleEdit}
          >
            <MdEditDocument /> Edit
          </button> */}
          <EditModal data={data} />
          {/* <FileViewer fileType={type} filePath={file} /> */}
          <button
            className="px-7  h-8 rounded text-slate-600 text-sm font-semibold bg-[#1aad7ce1] hover:bg-[#f83a53fc] hover:text-[#02200de1] shadow-md flex justify-center items-center gap-2 duration-300"
            onClick={handleDelete}
          >
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
