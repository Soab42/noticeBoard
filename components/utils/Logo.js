import Image from "next/image";
import React from "react";

export default function Logo(srcLink) {
  console.log(srcLink);
  return (
    <div>
      <Image
        alt="logo"
        width={20}
        src={
          "http://smartenterprisezone.com/Pmk/Content/SmartHomeAssets/images/HRM_New.png"
        }
      />
    </div>
  );
}
