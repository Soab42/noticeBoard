"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CardSlider() {
  const [slider, setSlider] = useState(0);
  const slide = [
    "/assets/images/banner-01.jpg",
    "/assets/images/banner-02.jpg",
    "/assets/images/banner-03.jpg",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setSlider((s) => (s + 1) % slide.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [slide]);
  return (
    <div id="" className="relative">
      {slide.map((s, i) => {
        return (
          <div className={`${slider === i ? "inline" : "hidden"}`} key={i}>
            <div className="text-center  w-full justify-center items-center relative bg-white">
              <div className="absolute top-0 text-white  w-full h-full bg-[rgba(0,0,0,.30)] flex justify-center items-center z-0">
                <div className="">
                  <div className="grid">
                    <h1 className="text-[5rem] grid font-bold leading-[4.5rem]">
                      Welcome To <span>Freshshop</span>
                    </h1>
                    <div className="mb-20 text-center mt-5">
                      <p>
                        See how your users experience your website in realtime
                        or view
                      </p>
                      trends to see any changes in performance over time.
                    </div>
                    <div>
                      <button
                        className="bg-lime-400 p-5 hover:bg-blue-700 cursor-pointer duration-700"
                        href="#"
                      >
                        Shop New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="object-cover "
                src={s}
                alt=""
                width={"10000"}
                height={"10"}
              />
            </div>
          </div>
        );
      })}

      <div className="absolute top-96 text-lime-400 text-[5rem] flex w-full justify-between items-center ">
        <button href="#" className="">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <button className="">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  );
}
