import React from "react";

const Header = ({ isSidebarOpen }) => {
  return (
    <div
      className={` header-content flex items-center justify-between bg-white p-4 shadow-md ${
        !isSidebarOpen ? "collapsed" : ""
      }`}
    >
      {/* Left side (My Feeds) */}
      <h1 className="ml-4 text-xl font-bold sm:ml-4 md:ml-8 lg:ml-10 xl:ml-56 2xl:ml-56">
        My Feeds
      </h1>

      {/* Right side (New Feed button, Settings icon, Avatar) */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white">
          New Feed <i className="fas fa-chevron-down"></i>{" "}
          {/* Dropdown arrow */}
        </button>
        <i className="fas fa-cog text-gray-500"></i> {/* Settings icon */}
        <div className="avatar flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
          Z
        </div>{" "}
        {/* Avatar */}
      </div>
    </div>
  );
};

export default Header;
