import React from "react";
import { Zeyada } from "next/font/google";
const font = Zeyada({
  weight: "400",
  subsets: ["latin"],
});
export default function Footer() {
  return (
    <div
      className={`${font.className}  p-0.5 text-blue-600 text-center bg-[#0f081e] tracking-[.5rem]`}
    >
      copyright &copy; soab@2023
    </div>
  );
}
