import Image from "next/image";
import React from "react";

export default function Img({ data }) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className="image flex justify-center">
      <Image
        src={data}
        width={1000}
        height={100}
        style={{
          backgroundColor: "#" + randomColor,
          transition: "backgroundColor 4s ease-in-out",
        }}
        alt={data}
      />
    </div>
  );
}
