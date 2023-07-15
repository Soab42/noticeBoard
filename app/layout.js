"use client";

import store from "@store/store";
import { Provider } from "react-redux";
import "@styles/globals.css";
import Nav from "../components/nav/navbar";
import Footer from "@components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>

      <body style={{ fontFamily: "Dosis" }}>
        <Provider store={store}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
