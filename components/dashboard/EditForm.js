"use client";
import React, { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { useEditDataMutation } from "@features/database/dbApi";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const EditForm = ({ closeModal, data }) => {
  const [tags, setTags] = useState(data?.data?.tags);
  const [newTag, setNewTag] = useState("");
  const [editData, { isError, isSuccess, error }] = useEditDataMutation();
  // console.log(data.data);
  // isSuccess &&
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...data.data,
      tags: tags,
    };
    // console.log(formData);

    editData(formData)
      .then(() => closeModal())
      .then(() => toast(`${formData.name} Update Successfully`));
  };

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
      <p className=" text-center bg-[#499797] p-2 font-bold mb-5 rounded-md">
        Update Data
      </p>
      <form onSubmit={handleSubmit} className=" text-sm w-full">
        {/* file Input */}

        {/* Name Input */}
        <div className="mb-4">
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
              disabled
              className="w-full p-2  bg-[#3c5858] rounded text-[#060707] capitalize"
            >
              <option className="bg-sky-300 " value={data?.data?.category}>
                {data?.data?.category}
              </option>
            </select>
          </div>
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
            disabled
            value={data?.data?.name}
            className="w-full p-2  rounded bg-[#3c5858] outline-none"
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
              onChange={(e) => setNewTag(e.target.value.toLowerCase())}
              className="w-full lowercase p-2 bg-[#499797] rounded"
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
          <div className="flex w-[26rem] flex-wrap  items-center">
            {Array.isArray(tags) &&
              tags?.map((tag) => (
                <div
                  key={tag}
                  className="flex w-24 border justify-between rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 shadow-md bg-gray-800"
                >
                  <p className="text-[#499797]">{tag}</p>
                  <button
                    type="button"
                    className="ml-2 text-red-400 text-[.91rem]"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Created At Input */}

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

      {isError && <div className="error">{error.message}</div>}
    </div>
  );
};

export default EditForm;
