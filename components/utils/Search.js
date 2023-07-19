import { addSearch } from "@features/filterSearch/filterSearchSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  let searchId;

  const handleSearch = (e) => {
    // e.preventDefault();
    // console.log(e.target[0].value);
    clearTimeout(searchId);
    searchId = setTimeout(() => {
      dispatch(addSearch(e.target.value));
    }, 500);
  };
  return (
    <div className="w-full">
      <input
        type="text"
        name="search"
        id=""
        onChange={handleSearch}
        placeholder="Type Your Keyword here..."
        className="rounded-lg w-full bg-sky-700 h-10 outline-none text-center text-sky-400 text-lg p-2 "
      />
    </div>
  );
}
