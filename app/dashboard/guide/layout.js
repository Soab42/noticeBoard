import React from "react";

export default function GuideLayout({ children }) {
  return (
    <div className="flex gap-2 h-full">
      <div>{children}</div>
    </div>
  );
}
