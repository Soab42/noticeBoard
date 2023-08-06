"use client";
import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage as DB } from "@firebase2";
import { useAddFileMutation } from "@features/storage/storeApi";

const fileForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [addFile, { isError, isSuccess, error }] = useAddFileMutation();
  const handleUpload = async ({ formData, file, category }) => {
    setIsUploading(true);
    const link = category + "/" + formData.name;
    const fileData = file;
    const dbRef = ref(DB, link);

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, fileData).then(() => {
      addFile(formData);
      setIsUploading(false);
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <form onSubmit={handleSubmit}>
        {/* file Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Tag Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
              onChange={(e) => setNewTag(e.target.value.toLocaleLowerCase())}
              className="w-full p-2 border rounded"
              placeholder="Enter a tag"
            />
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-4 w-1/4"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Display Tags */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Selected Tags:
          </label>
          {Array.isArray(tags) &&
            tags?.map((tag) => (
              <div
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => handleRemoveTag(tag)}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>

        {/* Category Select Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categorySelect"
          >
            Category:
          </label>
          <select
            id="categorySelect"
            name="category"
            required
            className="w-full p-2  border rounded"
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
            <option className="bg-sky-300" value="test">
              test
            </option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Created At Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="w-full p-2 border rounded"
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
    </div>
  );
};

export default fileForm;
