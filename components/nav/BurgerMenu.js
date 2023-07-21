import React from "react";

export default function BurgerMenu({ setShow, show }) {
  // console.log(show);
  return (
    <div className="grid w-7 ml-24 gap-1 " onClick={() => setShow(!show)}>
      <div
        className={`h-1 w-full duration-500 bg-violet-500 ${
          show && "rotate-45 translate-y-2 w-2/3 bg-red-600 rounded-full"
        }`}
      />
      <div className={`h-1 w-full bg-violet-500 ${show && "hidden"}`} />
      <div
        className={`h-1 w-full duration-700 bg-violet-500 ${
          show && "-rotate-45 bg-red-600 w-2/3 rounded-full"
        }`}
      />
    </div>
  );
}
