"use client";
import TopNavAdmin from "@components/dashboard/TopNavAdmin";
import { addUser } from "@features/auth/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardLayout({ children }) {
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
  //   !userData.isAdmin && router.push("/accessDenied");
  // }, []);
  return (
    <>
      <TopNavAdmin />
      <main>{children}</main>
    </>
  );
}
