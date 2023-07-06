import React from "react";
import Notification from "./Notification";
import Navbar from "./Navbar";
import CardSlider from "./CardSlider";
import Footer from "./Footer";
import Copyright from "./copyright";
export default function Layout() {
  return (
    <div>
      <Notification />
      <Navbar />
      <CardSlider />
      <Footer />
      <Copyright />
    </div>
  );
}
