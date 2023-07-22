"use client";
import { useState } from "react";

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleTagChange = (event) => {
    setNewTag(event.target.value);
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      setTags((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  };
  const handleCreatedAtChange = (event) => {
    setCreatedAt(event.target.value);
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container mx-auto p-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageName"
          >
            Image Name
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageName"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tags"
              placeholder="Enter a tag..."
              value={newTag}
              onChange={handleTagChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleAddTag();
                }
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/4 ml-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
                <button
                  className="ml-2 text-red-500 font-bold focus:outline-none"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="format">Format</option>
            <option value="circuler">Circuler</option>
            <option value="regulation">Regulation</option>
            <option value="report">Report</option>{" "}
            <option value="job">Job</option>{" "}
            <option value="others">Others</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="createdAt"
          >
            Created At
          </label>
          <input
            type="date"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="createdAt"
            value={createdAt}
            onChange={handleCreatedAtChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
