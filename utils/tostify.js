import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Tostify() {
  const simulatePromise = (shouldResolve) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve("Promise resolved!");
        } else {
          reject(new Error("Promise rejected!"));
        }
      }, 2000); // Simulating async operation with a timeout
    });
  };

  const handleButtonClick = () => {
    // Simulate a resolved Promise
    simulatePromise(true)
      .then((message) => {
        toast.success(message);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    // Simulate a rejected Promise
    // simulatePromise(false)
    //   .then((message) => {
    //     toast.success(message);
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Promise Toast</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
