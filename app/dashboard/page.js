import React from "react";

import { MdAddCard, MdSpaceDashboard } from "react-icons/md";

import AllProduct from "@components/dashboard/Allproduct";
import SemiNav from "@components/dashboard/SemiNav";
export default function Dashboard() {
  return (
    <div className="mainWrapper">
      <div className="topBar "></div>
      <div className="contentWrapper flex bg-red-200">
        {/* <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav min-h-full bg-blue-950 w-56 p-4 gap-2 h-ful hidden">
          <div className=" flex flex-col gap-1">
            <div className="sidebar-item">
              <div className="flex px-3 gap-1 item-center hover:bg-orange-700 bg-sky-700">
                <div className="flex items-center text-lg">
                  <MdSpaceDashboard />
                </div>
                <p className="flex items-center">Dashboard</p>
              </div>
            </div>

            <div className="sidebar-item">
              <div className="flex px-2 gap-1 item-center hover:bg-orange-700 bg-sky-700">
                <div className="flex items-center text-lg">
                  <MdAddCard />
                </div>
                <span className="hide-menu">Add Data </span>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- End Sidebar navigation --> */}

        {/* <!-- End Sidebar scroll--> */}

        <div className="pageWrapper h-full w-full">
          <SemiNav />
          <AllProduct />
        </div>
      </div>
      <div className="footerWrapper"></div>
    </div>
  );
}