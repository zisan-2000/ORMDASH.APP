const SidebarFeed = ({ isOpen }) => {
  return (
    <div className="mt-4">
      <button
        className={`w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-all ease-in-out ${
          !isOpen && "hidden"
        }`}
      >
        + New Feed
      </button>
    </div>
  );
};

export default SidebarFeed;
