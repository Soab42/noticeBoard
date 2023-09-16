"use client";

import Nav from "../../components/nav/navbar";
import Footer from "@components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { addUser } from "@features/auth/authSlice";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function BranchLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      // console.log(userCookie);
      dispatch(addUser(user));
    }
  }, []);

  // useEffect(() => {
  //   !userData.accessToken && router.push("/login");
  // }, []);
  return (
    <div className="flex justify-between h-full flex-col">
      <div className="m-0 p-0 w-full fixed z-10">
        <Nav />
      </div>
      <main className="z-0 pt-16 h-[95vh] overflow-hidden ">{children}</main>
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
      <Footer />
    </div>
  );
}
