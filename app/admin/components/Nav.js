import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="flex flex-col w-[15rem] bg-[#46A094] h-[62rem]">
        <Link
          className="font-bold text-2xl py-5 uppercase text-center "
          href={"/admin"}
        >
          Menu
        </Link>
        <div className="List flex flex-col justify-center items-center">
          <Link className="LinkAdmin" href={"admin/addProduct"}>
            Add Products
          </Link>
          <Link className="LinkAdmin" href={"admin/addCategory"}>
            Add Category
          </Link>
          <Link className="LinkAdmin" href={"admin/addStock"}>
            Products Stock
          </Link>
          <Link className="LinkAdmin" href={"admin/ProductOrder"}>
            Products Order
          </Link>
        </div>
        {/* list of operation */}
      </div>
    </div>
  );
}
