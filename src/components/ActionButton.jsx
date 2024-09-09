import React from "react";
import { FaPlus } from "react-icons/fa"; // Importing the plus icon
import { Link } from "react-router-dom";

const ActionButton = () => {
  return (
    <Link to="/create-feed">
      <button className="flex items-center gap-2 rounded-md bg-blue-500 px-6 py-3 text-white shadow-md hover:bg-blue-600 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-5 xl:px-14 xl:py-5 2xl:ml-96">
        <FaPlus /> {/* Left-aligned icon */}
        Create New Feed
      </button>
    </Link>
  );
};

export default ActionButton;
