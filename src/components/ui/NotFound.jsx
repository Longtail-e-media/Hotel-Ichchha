import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-4xl font-bold mb-4">404 - Page Not Found</h3>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => window.history.back()}
        className="w-auto group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-goldLight text-navy px-6 py-2 rounded-full text-base transition-all duration-300 ease-linear"
        title="Go Back"
        aria-label="Go Back"
      >
        <HiArrowLongLeft className="group-hover:scale-x-[2] group-hover:-translate-x-1 transition-all duration-150 ease-linear" />
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
