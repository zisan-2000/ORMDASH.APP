import { useState } from "react";
import { menuItems, planInfo, upgradeData } from "../../Data/Data";
import SearchBar from "./SearchBar";
import SidebarFeed from "./SidebarFeed"; // New
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarStarred from "./SidebarStarred"; // New
import SidebarUpgrade from "./SidebarUpgrade";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar scrollbar ${
        isOpen ? "w-64" : "w-20"
      } overflow-y-auto`}
    >
      <div className="flex items-center justify-between">
        <SidebarLogo isOpen={isOpen} />
        <button onClick={toggleSidebar} className="p-2 text-white">
          <i className={`fas fa-${isOpen ? "angle-left" : "angle-right"}`}></i>
        </button>
      </div>
      <SearchBar />
      <SidebarMenu menuItems={menuItems} isOpen={isOpen} />
      <SidebarFeed isOpen={isOpen} /> {/* New Feed Button */}
      <SidebarStarred isOpen={isOpen} /> {/* Starred Section */}
      <SidebarUpgrade
        isOpen={isOpen}
        planInfo={planInfo}
        upgradeData={upgradeData}
      />
      {/* <SidebarAdmin isOpen={isOpen} /> */}
    </div>
  );
};

export default Sidebar;
