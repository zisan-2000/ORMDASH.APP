import React from "react";
import { FaChevronDown, FaRss } from "react-icons/fa"; // Importing the RSS icon

const SidebarLogo = ({ isOpen }) => {
  return (
    <div className="mb-6 flex items-center text-2xl font-bold text-white">
      {/* RSS Icon */}
      <FaRss className="mr-2 text-orange-500" /> {/* Always show this icon */}
      {/* Conditionally show RSS.app text and ChevronDown icon if isOpen is true */}
      {isOpen && (
        <>
          <span>ORMDASH.APP</span>
          <FaChevronDown className="ml-2 text-sm" />
        </>
      )}
    </div>
  );
};

export default SidebarLogo;
