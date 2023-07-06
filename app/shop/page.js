"use client";
import { useGetProductsQuery } from "@features/products/productsApi";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function page() {
  const { data, isSuccess, isLoading, isError, error } = useGetProductsQuery();
  console.log("hi");
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = <div className="">{error.data}</div>;
  }
  if (isSuccess) {
    content = (
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {data?.map((product) => (
          <div className=" h-60 bg-pink-600 w-60">
            <div className="p-3">
              <div className="flex justify-center ">
                <img
                  className="object-fill h-36 w-36 rounded-full"
                  src={product.image}
                  alt=""
                />
              </div>

              <p className=" p-1" href="#">
                {product.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
}
