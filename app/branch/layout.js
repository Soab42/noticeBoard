"use client";

import "@styles/globals.css";
import Nav from "../../components/nav/navbar";
import Footer from "@components/footer/Footer";

export default function BranchLayout({ children }) {
  return (
    <div className="flex justify-between h-full flex-col">
      <div className="m-0 p-0 w-full fixed z-10">
        <Nav />
      </div>
      <main className="z-0 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
