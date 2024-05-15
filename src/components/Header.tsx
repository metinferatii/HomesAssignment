import { useState } from 'react';

interface HeaderProps {
  userName: string;
  onToggle: (newFilter: 'matches' | 'suggestion') => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onToggle }) => {
  const [activeFilter, setActiveFilter] = useState<'matches' | 'suggestion'>('matches');

  const handleButtonClick = (filter: 'matches' | 'suggestion') => {
    setActiveFilter(filter);
    onToggle(filter);
  };

  return (
    <header className="bg-zinc-50 p-8 flex justify-between items-center">
      <div>
        <h1 className="text-3xl text-teal-600 font-semibold">Hello {userName}</h1>
        <p className="text-gray-600">Welcome to your personal dashboard</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleButtonClick('matches')}
          className={`mr-4 px-4 py-2 rounded-md ${activeFilter === 'matches' ? 'text-white bg-teal-600' : 'text-black bg-white border-2'}`}
        >
          Matches
        </button>
        <button
          onClick={() => handleButtonClick('suggestion')}
          className={`px-4 py-2 rounded-md ${activeFilter === 'suggestion' ? 'text-white bg-teal-600' : 'text-black bg-white border-2'}`}
        >
          Suggestions
        </button>
        <div className="ml-4">
          <img className="w-10 h-10 rounded-full" src="/path/to/avatar.jpg" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
