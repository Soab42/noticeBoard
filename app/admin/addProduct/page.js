"use client";
import { useAddProductsMutation } from "@features/products/productsApi";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function page() {
  const [addProduct, { isError, isSuccess }] = useAddProductsMutation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData).then();
  };

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 ring-4 p-10 rounded-md ring-black"
      >
        <p className="text-4xl bg-lime-800  p-4 text-white rounded-lg text-center">
          Add Product
        </p>
        <label className="label">
          <p>Product Name</p>
          <input
            required
            type="text"
            name="title"
            className="input"
            onChange={handleChange}
          />
        </label>

        <label className="label">
          CatagoryName{" "}
          <input
            required
            type="text"
            name="category"
            className="input"
            onChange={handleChange}
          />
        </label>

        <label className=" h-20 label">
          Description
          <textarea
            required
            name="description"
            className="w-96 h-20 rounded-lg"
            onChange={handleChange}
          />
        </label>

        <label className="label">
          <p> Price</p>
          <input
            required
            name="price"
            type="number"
            className="input"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <p>Product Image Link</p>
          <input
            required
            type="text"
            name="image"
            className="input"
            onChange={handleChange}
          />
        </label>

        <div className="flex justify-between pt-5">
          <button type="submit" className="btn">
            Add Product
          </button>
        </div>
        <div>{isSuccess && "Succesfully Added Products"}</div>
        <div>{isError && "There is an error"}</div>
      </form>
    </div>
  );
}
