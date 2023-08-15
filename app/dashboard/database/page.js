import React from "react";

import AllProduct from "@components/dashboard/Allproduct";
import SemiNav from "@components/dashboard/SemiNav";

import { ToastContainer } from "react-toastify";

export default function AddData() {
  return (
    <div className="mainWrapper">
      <div className="contentWrapper flex">
        <div className="pageWrapper h-full w-full">
          <div className="flex justify-between">
            <div className="w-full">
              <div className="">
                <SemiNav />
              </div>
              <AllProduct />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{ backgroundColor: "aquamarine" }}
      />
      <div className="footerWrapper"></div>
    </div>
  );
}
