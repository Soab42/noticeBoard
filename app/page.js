"use client";

import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"

export default function Page() {
  // Capitalize component names (e.g., Page instead of page)
  const router = useRouter();

  const handleAdminClick = () => {
    router.push("/dashboard"); // Navigate to "/dashboard" when the "Admin" button is clicked
  };

  const handleBranchClick = () => {
    router.push("/branch"); // Navigate to "/branch" when the "Branch" button is clicked
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to our Landing Page
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our services by clicking below:
        </p>
        <div className="flex gap-4">
          <button
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleAdminClick}
          >
            Admin
          </button>
          <button
            className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleBranchClick}
          >
            Branch
          </button>
        </div>
      </div>
    </div>
  );
}
