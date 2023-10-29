import Image from "next/image";
import React, { useRef, useState } from "react";
import Section from "./section";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage as DB } from "@firebase2";
import axios from "axios";
import TextEditor from "./Editor";

export default function GuideForm({ type, category }) {
  const editorRef = useRef(null);
  const [file, setFile] = useState();
  const [fileSl, setFileSl] = useState();
  const [image, setImage] = useState();
  const [section, setSection] = useState();
  //   console.log(file);
  //   console.log("form", category);

  const handleUpload = async (file, category) => {
    const link = "guide/" + category + "/" + fileSl;
    const fileData = file;
    const dbRef = ref(DB, link);

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, fileData).then(async () => {
      const downloadURL = await getDownloadURL(dbRef);
      setImage(downloadURL);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Upload the file first
    if (file) {
      await handleUpload(file, category).then(
        async () => await axios.post(`/api/guide/${category}`, { img: image })
      );
    }

    if (section) {
      await axios
        .post(`/api/guide/${category}`, { section: section })
        .then(function (response) {
          console.log(response);
          alert("Successfully Uploaded");
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // Add any additional logic or handling after the requests are made
  };
  // console.log("section", section);

  return (
    <form onSubmit={handleSubmit}>
      {type == "image" ? (
        <div className="w-full flex flex-col justify-center items-center gap-2">
          {image && (
            <Image
              width={1000}
              height={100}
              alt="test"
              src={image}
              className="object-cover"
            />
          )}
          <div className="flex justify-between bg-black/30 p-2 w-full">
            <input
              name="image"
              type="file"
              accept=".png,.jpg,.jpeg,.webp"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <label>
              Image No
              <input
                type="number"
                className=" ml-2 w-20 text-center"
                onChange={(e) => setFileSl(e.target.value)}
              />
            </label>

            <button className="bg-blue-400 px-4 h-10" type="submit">
              Add Image
            </button>
          </div>
        </div>
      ) : type == "section" ? (
        <div className="flex flex-col justify-between bg-black/20 p-2 items-center w-full">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            {section && <Section data={section} />}
          </div>
          {/* <div className="flex justify-between p-2 w-full">
            <textarea
              id="story"
              name="section"
              className="w-[80%] h-36 outline-none px-2"
              onChange={(e) => setSection(e.target.value)}
            />
            <button className="bg-blue-400 px-4 h-10" type="submit">
              Add Section
            </button>{" "}
          </div> */}
          <div className="flex justify-between p-2 w-full">
            <TextEditor editorRef={editorRef} />
            <div className="flex flex-col justify-around">
              <div
                className="bg-green-400 px-4 h-10 active:bg-green-400/20 duration-300 flex justify-center items-center cursor-pointer"
                onClick={() => setSection(editorRef.current.getContent())}
              >
                Try It
              </div>
              <button className="bg-blue-400 px-4 h-10" type="submit">
                Add Section
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
