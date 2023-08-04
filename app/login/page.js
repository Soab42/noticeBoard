"use client";

import React, { useEffect, useState } from "react";
import { MdLogin } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase2";
import { addUser } from "@features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userRes) => {
        // Handle successful login
        const isAdmin = userRes.user.email === "saif@gmail.com";
        dispatch(
          addUser({
            email: userRes.user.email,
            accessToken: userRes.user.accessToken,
            isAdmin: isAdmin,
          })
        );
        const userData = {
          email: userRes.user.email,
          accessToken: userRes.user.accessToken,
          isAdmin: isAdmin,
        };
        const user = JSON.stringify(userData);
        // Set cookies with user data
        Cookies.set("user", user);
        Cookies.set("accessToken", userRes.user.accessToken);

        // Redirect the user to a protected route after successful login.
        isAdmin ? router.push("/dashboard") : router.push("/branch");
      })
      .catch((error) => {
        // Handle login errors
        setError(error.code);
      });
  };

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      // console.log(userCookie);
      dispatch(addUser(user));
      user.isAdmin ? router.push("/dashboard") : router.push("/branch");
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 p-2">
      <div className=" w-full h-full bg-white shadow-md rounded-md xl:flex  md:flex justify-center items-center gap-5 relative overflow-hidden">
        <div className="absolute hidden md:flex xl:flex bg-violet-600 rounded-full opacity-70  h-[13rem] w-[13rem] -left-20 -bottom-20 -z-9 "></div>
        {/* illustration showcase */}
        <div className=" h-fit   flex justify-center items-center">
          <div className=" xl:w-[40rem] md:w-[35rem] w-[20rem] object-contain">
            <img src="illustration/6310507.jpg" alt="" className="imgAnim" />
          </div>
        </div>{" "}
        {/* bg decoration  elements */}
        <div className="absolute bg-pink-600 rounded-full  h-[12rem] xl:w-[12rem] md:w-[12rem] right-14 top-10 shadow-xl hidden  pAnim"></div>
        {/* form elements start */}
        <div className="shadow-2xl flex flex-col justify-start items-center p-8 xl:w-1/3 md:w-[40%]  h-[26rem] bg-[#8da1a337] rounded-xl relative overflow-hidden backdrop-blur-sm formAnim">
          {/* form bg decoration  elements */}
          <div className="absolute bg-violet-600 rounded-full  h-[10rem] w-[10rem] right-0 blur-3xl  -z-9 vAnim"></div>
          <div className="absolute bg-pink-600 rounded-full  h-[5rem] w-[15rem] left-0 bottom-0 blur-3xl  -z-9 pAnim"></div>

          <div className="w-full z-0">
            <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 shadow-md py-2  rounded-md focus:outline-none bg-transparent  focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent inset-2 shadow-md px-4 py-2  rounded-md focus:outline-none focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:border-blue-300 flex justify-center items-center gap-2 text-xl"
                disabled={isLoading}
              >
                <MdLogin />
                {isLoading ? "logging..." : "Login"}
              </button>
            </form>
            {error && (
              <div
                className="w-full px-4 py-2 bg-red-200 text-sm text-gray-600 text-center mt-5   rounded-md 
          focus:border-blue-300"
              >
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
