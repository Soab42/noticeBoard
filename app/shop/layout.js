"use client";
import Notification from "@components/layout/Notification";
import store from "@store/store";
import { Provider } from "react-redux";
import "@styles/globals.css";
import Navbar from "@components/layout/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Provider store={store}>
          <nav>
            <Notification />
            <Navbar />
          </nav>
          <main>{children}</main>
          <footer>footer</footer>
        </Provider>
      </body>
    </html>
  );
}
