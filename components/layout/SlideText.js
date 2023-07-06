"use client";
import { useGetOffersQuery } from "@features/offer/offerApi";
import React, { useEffect, useState } from "react";

export default function Slidetext() {
  const [count, setCount] = useState(0);
  const [pulse, setPulse] = useState(1);
  const [show, setShow] = useState(false);
  const { data: offerBox } = useGetOffersQuery();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count + 1) % offerBox?.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count, offerBox]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(true);
      setPulse(1);
    }, 3600);

    return () => {
      clearInterval(intervalId);
      setShow(false);
    };
  }, []);

  useEffect(() => {
    setPulse((pulse) => Math.max(pulse - 0.0029, 0));
  }, [pulse]);

  return (
    <div className="text-slid-box">
      <div id="offer-box">
        <ul className="offer-box flex items-center">
          {offerBox?.map((offer, i) => (
            <li
              className={`flex gap-2 text-teal-500 font-bold text-lg items-center justify-start ${
                i === count ? "" : "hidden"
              }`}
              style={i === count && show ? { opacity: pulse } : {}}
              key={i}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
              </svg>
              <p>{offer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
