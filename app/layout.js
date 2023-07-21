"use client";

import store from "@store/store";
import { Provider } from "react-redux";
import "@styles/globals.css";
import Nav from "../components/nav/navbar";
import Footer from "@components/footer/Footer";
import { Dosis } from "@next/font/google";
const dosis = Dosis({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body
        // style={{ fontFamily: "Dosis" }}
        className={`${dosis.className} mainBg`}
      >
        <Provider store={store}>
          <div className="m-0 p-0 w-full fixed z-10">
            <Nav />
          </div>
          <main className="z-0 pt-16">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
