const Sidebar: React.FC = () => {
    return (
      <aside className="bg-[#F5F0F0] w-18 min-h-screen flex flex-col items-center py-4">
        <div className="mb-6">
          <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <nav className="flex flex-col items-center px-6">
          <a href="#" className="mb-6 text-gray-600 hover:text-primary">
            <i className="fas fa-home"></i>
            Home
          </a>
          <a href="#" className="mb-6 text-gray-600 hover:text-primary">
            <i className="fas fa-building"></i>
            Properties
          </a>
          <a href="#" className="mb-6 text-gray-600 hover:text-primary">
            <i className="fas fa-user-friends"></i>
            Agents
          </a>
          <a href="#" className="mb-6 text-gray-600 hover:text-primary">
            <i className="fas fa-cog"></i>
            Settings
          </a>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  