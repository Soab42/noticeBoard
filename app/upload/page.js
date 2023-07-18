"use client";
import { useState } from "react";

import { useAddFileMutation } from "@features/storage/storeApi";

const page = () => {
  const [file, setFile] = useState(null);
  const [date, setDate] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [category, setCategory] = useState("circular");
  const [addFile, { isError, isSuccess, data, isLoading, error }] =
    useAddFileMutation();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // console.log(selectedFile);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    // console.log(selectedDate);
  };

  const handleTagInputChange = (event) => {
    const input = event.target.value;
    setTagInput(input);
  };

  const handleAddTag = () => {
    if (tagInput.trim() === "") {
      return;
    }

    if (tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };
  const handleUpload = () => {
    // const formData = {
    //   file: file,
    //   date: date,
    //   tags: JSON.stringify(tags),
    //   category: category,
    // };
    const formData = new FormData();
    formData.append("date", date);
    formData.append("tags", JSON.stringify(tags));
    formData.append("category", category);
    formData.append("file", file);

    // Create a storage reference with a unique filename
    // console.log(formData);
    // Upload the file to Firebase Storage
    addFile(formData);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-md mx-auto p-4 ring-2  rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-center text-blue-400 shadow-md p-2 bg-[#1a459cbc]">
          File Upload
        </h2>
        <div className="p-2 flex flex-col">
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx,.pdf"
            className="mb-2 h-10 text-blue-400"
            onChange={handleFileChange}
          />
          <label className="block mb-1 text-blue-500">Published Date</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            className="w-full mb-2 p-2 border rounded"
            onChange={handleDateChange}
          />
          <label className="block mb-1 text-blue-500">Keyword Tag</label>
          <div className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Tag"
              value={tagInput}
              className="w-full p-2 border rounded"
              onChange={handleTagInputChange}
            />
            <button
              className="bg-blue-500 text-white py-1 px-2 w-32 rounded hover:bg-blue-600 ml-2"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
          <div className="mb-2">
            <label className="block mb-1 text-blue-500">Category</label>
            <select
              className="w-full p-2 text-center border rounded"
              value={category}
              onChange={handleCategoryChange}
            >
              <option className="text-center" value="circular">
                Circular
              </option>
              <option className="text-center" value="format">
                Format
              </option>
              <option className="text-center" value="regulation">
                Regulation
              </option>
              <option className="text-center" value="job">
                Job
              </option>
              <option className="text-center" value="others">
                Others
              </option>
            </select>
          </div>
          <div className="mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveTag(tag)}
                >
                  Remove
                </button>
              </span>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </div>
        {isError && <p className="text-red-500 mt-2">{error.message}</p>}
        {isSuccess && (
          <p className="text-green-500 mt-2">{data.message}</p>
        )}{" "}
      </div>
    </div>
  );
};

export default page;
