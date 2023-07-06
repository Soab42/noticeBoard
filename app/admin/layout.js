"use client";
import Notification from "@components/layout/Notification";
import store from "@store/store";
import { Provider } from "react-redux";
import "@styles/globals.css";
import Navbar from "@components/layout/Navbar";
import Link from "next/link";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Provider store={store}>
          <div className="h-20 bg-amber-500 flex justify-center item-center p-4 uppercase font-thin  text-4xl ">
            Admin Panel || Zazabor{" "}
          </div>

          <main className="flex">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
