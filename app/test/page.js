"use client";

import React, { useState } from "react";
// import { CldUploadButton } from "next-cloudinary";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage as DB } from "@firebase2";
const ImageForm = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const handleUpload = async (result) => {
    const dbRef = ref(DB, "others/a.jpg");

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, result).then(() => {
      getDownloadURL(dbRef).then((downloadURL) => {
        setImageUrl(downloadURL);
      });
    });
  };
  // console.log(imageUrl);
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target[0].value);
    //set image file to image

    setImage(e.target[0].files);
    // upload to firebase server

    setCategory(e.target[2].value);
    setTags(e.target[1].value);
    setCreatedAt(e.target[3].value);

    // set form Data
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("createdAt", createdAt);
    // formData
    // console.log(formData);
    handleUpload(image);
  };
  const getAllList = () => {
    const dbRef = ref(DB, "others/a.jpg");
    getDownloadURL(dbRef).then((res) => console.log(res));
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <form onSubmit={handleSubmit}>
        {/* Image Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageInput"
          >
            Image:
          </label>
          {/* <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="qrqgoway"
          > */}
          <input
            type="file"
            id="imageInput"
            name="image"
            className="w-full p-2 border rounded"
          />
          {/* </CldUploadButton> */}
        </div>

        {/* Tag Array Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tagInput"
          >
            Tags:
          </label>
          <input
            type="text"
            id="tagInput"
            name="tags"
            className="w-full p-2 border rounded"
            placeholder="Tag1, Tag2, Tag3"
          />
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
            className="w-full p-2 border rounded"
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
            id="createdAtInput"
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
      <div>
        <button onClick={getAllList}>get list</button>
      </div>
    </div>
  );
};

export default ImageForm;
