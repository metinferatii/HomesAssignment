import { useState } from 'react';
import Header from '../components/Header';
import PropertyList from '../components/PropertyList';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  const [filter, setFilter] = useState<'matches' | 'suggestion'>('matches');

  const handleToggle = (newFilter: 'matches' | 'suggestion') => {
    setFilter(newFilter);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white">
        <Header userName="Metin" onToggle={handleToggle} />
        <div className="container mx-auto p-4">
          <PropertyList filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
