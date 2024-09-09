const SidebarAdmin = ({ isOpen }) => {
  return (
    <div className="admin-section">
      <div className="avatar">Z</div>
      <div className={`${!isOpen && "hidden"}`}>
        <p className="font-semibold">User Name</p>
        <p className="text-sm text-gray-500">Basic Trial</p>
      </div>
    </div>
  );
};

export default SidebarAdmin;
