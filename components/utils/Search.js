import React from "react";

export default function Search() {
  return (
    <div>
      <form action="" className="gap-4 w-full flex">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Type Your Keyword here..."
          className="rounded-lg w-full bg-sky-700 h-10 outline-none text-center text-sky-400 text-lg p-2 "
        />
        <button
          type="submit"
          className="bg-blue-900 text-[#23af84] filter-btn w-44 rounded-lg hover:bg-[#23af84] hover:text-[#53d9f4] text-xl font-bold"
        >
          Search
        </button>
      </form>
    </div>
  );
}
