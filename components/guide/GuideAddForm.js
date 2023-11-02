import axios from "axios";
import React, { useState } from "react";

export default function GuideAddForm() {
  const [guideData, setGuideData] = useState({
    guideName: "",
    title: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuideData({
      ...guideData,
      [name.replace(/ /g, "")]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, by sending the data to an API or storing it in your application's state.
    console.log("Submitted Data:", guideData);

    axios
      .post("/api/guide", guideData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    // Reset the form
    setGuideData({
      guideName: "",
      title: "",
    });
  };

  return (
    <form
      className="absolute top-12 right-[.2rem] flex flex-col gap-2 bg-green-500/50 p-4 z-50"
      onSubmit={handleSubmit}
    >
      <label>
        Short Name:
        <input
          type="text"
          name="guideName"
          placeholder="singleword"
          className="pl-2 h-10"
          value={guideData.guideName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          className="pl-2 h-10"
          value={guideData.title}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="btn">
        Add Guide
      </button>
    </form>
  );
}
