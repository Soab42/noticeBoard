/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* <!-- Start Main Top --> */}
      <header className="  w-screen sticky top-0 z-50">
        {/* <!-- Start Navigation --> */}

        <nav className="flex z-10 relative ">
          <div className="flex justify-center items-center gap-36 w-full h-32 bg-slate-500">
            {/* <!-- Start Header Navigation --> */}
            <div className="navbar-header">
              <Link href={"/"} className="flex items-center justify-center">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={180}
                  height={180}
                />
              </Link>
            </div>
            {/* <!-- End Header Navigation --> */}

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="flex w-2/6 justify-end" id="navbar-menu">
              <ul className="flex gap-8 font-bold items-center uppercase ">
                <Link className="navLink" href="home">
                  Home
                </Link>

                <Link className="navLink" href="about.html">
                  About Us
                </Link>

                <li
                  className="relative"
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <Link href="#" className="navLink">
                    SHOP
                  </Link>
                  <ul
                    className={`navDrop p-4 gap-2 grid absolute ${
                      !show && "hidden"
                    }`}
                  >
                    <Link className="navDropLink" href="shop.html">
                      Sidebar Shop
                    </Link>

                    <Link className="navDropLink" href="shop-detail.html">
                      Shop Detail
                    </Link>

                    <Link className="navDropLink" href="cart.html">
                      Cart
                    </Link>

                    <Link className="navDropLink" href="checkout.html">
                      Checkout
                    </Link>

                    <Link className="navDropLink" href="my-account.html">
                      My Account
                    </Link>

                    <Link className="navDropLink" href="wishlist.html">
                      Wishlist
                    </Link>
                  </ul>
                </li>

                <Link className="navLink" href="gallery.html">
                  Gallery
                </Link>

                <Link className="navLink" href="contact-us.html">
                  Contact Us
                </Link>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}

            {/* <!-- Start Atribute Navigation --> */}
            <div className="flex gap-3">
              <ul className="flex gap-3">
                <button onClick={() => setShowSearch(!showSearch)}>
                  <i class="bi-search" />
                </button>
                <button
                  className="flex relative gap-1"
                  onClick={() => setShowCart(!showCart)}
                >
                  <i class="bi-cart-check-fill"></i>
                  <span className="absolute -right-2 font-bold text-sm -top-2">
                    3
                  </span>
                  <p>My Cart</p>
                </button>
              </ul>
            </div>
            {/* <!-- End Atribute Navigation --> */}
          </div>
          {/* <!-- Start Side Menu --> */}
          <div
            className={`absolute right-0 bg-black h-[94vh] p-4 w-80 duration-700 z-50 ${
              !showCart && "translate-x-96"
            } sidebar`}
          >
            <div className="flex justify-end">
              <button
                className="text-red-400 text-xl  p-2 bg-slate-900 self-end mb-1"
                onClick={() => {
                  setShowCart(false);
                }}
              >
                close <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <Link href="#" className="close-side">
              <i className="fa fa-times"></i>
            </Link>
            <div className="cart-box">
              <div className="grid gap-4 bg-slate-100 p-4 items-center">
                <li className="flex gap-2">
                  <Link href="#" className="flex justify-center items-center">
                    <Image
                      src={"/assets/images/img-pro-01.jpg"}
                      alt=""
                      width={70}
                      height={60}
                    />
                  </Link>
                  <div className="grid">
                    <h6>
                      <Link href="#" className="font-bold">
                        Delica omtantur{" "}
                      </Link>
                    </h6>
                    <p>
                      1x - <span className="price">$80.00</span>
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Link href="#" className="photo">
                    <Image
                      src="/assets/images/img-pro-02.jpg"
                      alt=""
                      width={70}
                      height={60}
                    />
                  </Link>
                  <div className="grid">
                    <h6>
                      <Link href="#" className="font-bold">
                        Delica omtantur{" "}
                      </Link>
                    </h6>
                    <p>
                      1x - <span className="price">$80.00</span>
                    </p>
                  </div>
                </li>{" "}
                <li className="flex gap-2">
                  <Link href="#" className="photo">
                    <Image
                      src="/assets/images/img-pro-03.jpg"
                      alt=""
                      width={70}
                      height={60}
                    />
                  </Link>
                  <div className="grid">
                    <h6>
                      <Link href="#" className="font-bold">
                        Delica omtantur{" "}
                      </Link>
                    </h6>
                    <p>
                      1x - <span className="price">$80.00</span>
                    </p>
                  </div>
                </li>
                <div className="total">
                  <button className="bg-lime-400 font-bold p-2 ">
                    VIEW CART
                  </button>
                  <span className="float-right">
                    <strong>Total</strong>: $180.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Side Menu --> */}
        </nav>
        {/* <!-- End Navigation --> */}
        <div
          className={` w-screen bg-black text-white  duration-700 ${
            showSearch ? "h-12 block" : "h-0 none"
          }`}
        >
          <div className={""}>
            <div
              className={`flex gap-4 p-2 justify-center items-center h-12 duration-700 fixed ${
                showSearch ? "translate-x-0" : "-translate-y-10"
              }`}
            >
              <span className="">
                <i class="bi-search"></i>
              </span>
              <input
                type="text"
                className="w-2/3 pl-5 outline-none bg-inherit"
                placeholder="Search"
              />
              <button className="" onClick={() => setShowSearch(!showSearch)}>
                <i class="bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End Main Top --> */}

      {/* <!-- Start Top Search --> */}

      {/* <!-- End Top Search --> */}
    </>
  );
}
