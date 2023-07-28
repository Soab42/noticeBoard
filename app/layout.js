"use client";

import store from "@store/store";
import { Provider } from "react-redux";
import "@styles/globals.css";

import { Dosis } from "next/font/google";
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
        className={`${dosis.className} mainBg h-screen`}
      >
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
