"use client";
import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage as DB } from "@firebase2";

import { AiFillCloseCircle } from "react-icons/ai";
import { useAddDataMutation } from "@features/database/dbApi";
import { toast } from "react-toastify";

const FileForm = ({ closeModal }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [addData, { isError, isSuccess, error }] = useAddDataMutation();
  const handleUpload = async ({ formData, file, category }) => {
    setIsUploading(true);
    const link = category + "/" + formData.name;
    const fileData = file;
    const dbRef = ref(DB, link);

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, fileData).then(() => {
      addData(formData)
        .then(() => {
          closeModal();
          setIsUploading(false);
        })
        .then(() => toast(`Uploaded ${formData.name} successfully`));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const formData = {
        name: name + "_" + createdAt,
        category: category,
        tags: tags,
        createdAt: createdAt,
      };

      // console.log(formData);
      // addFile(formData);
      handleUpload({ formData, file, category });
    }
  };
  // console.log(typeof tags);
  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      setTags((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  return (
    <div className=" mx-auto flex flex-col  p-6 shadow-md w-full min-w-fit">
      <p className=" text-center bg-[#499797] p-2 font-bold mb-5 ">
        Add New Data
      </p>
      <form onSubmit={handleSubmit} className=" text-sm w-[35rem]">
        {/* file Input */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="fileInput"
          >
            file:
          </label>
          <input
            type="file"
            id="fileInput"
            name="file"
            required
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2  rounded bg-[#499797] outline-none"
          />
        </div>
        {/* Tag Input */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="newTag"
          >
            Tags:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="newTag"
              name="tags"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full p-2 bg-[#499797] rounded"
              placeholder="Enter a tag"
            />
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-4 w-36"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Display Tags */}
        <div className="mb-4">
          <div className="flex items-center flex-wrap w-full">
            {Array.isArray(tags) &&
              tags?.map((tag) => (
                <div
                  key={tag}
                  className="flex w-24 border justify-between rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 shadow-md bg-gray-800"
                >
                  <p className="text-[#499797]">{tag}</p>
                  <button
                    type="button"
                    className="ml-2 text-red-700 text-[.91rem]"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Category Select Input */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="categorySelect"
          >
            Category:
          </label>
          <select
            id="categorySelect"
            name="category"
            required
            className="w-full p-2  bg-[#499797] rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="bg-sky-300 " value="">
              Select a category
            </option>
            <option className="bg-sky-300" value="format">
              Format
            </option>
            <option className="bg-sky-300" value="circular">
              Circular
            </option>
            <option className="bg-sky-300" value="regulation">
              Regulation
            </option>
            <option className="bg-sky-300" value="report">
              Report
            </option>{" "}
            <option className="bg-sky-300" value="job">
              Job
            </option>{" "}
            <option className="bg-sky-300" value="others">
              Others
            </option>
            <option className="bg-sky-300" value="others">
              test
            </option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Created At Input */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="createdAtInput"
          >
            Created At:
          </label>
          <input
            type="date"
            required
            id="createdAtInput"
            onChange={(e) => setCreatedAt(e.target.value)}
            name="createdAt"
            className="w-full p-2 bg-[#499797] rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div>{isUploading && "Uploading..."}</div>
      {isError && <div className="error">{error.message}</div>}
    </div>
  );
};

export default FileForm;
