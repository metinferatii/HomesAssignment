import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProperties } from '../redux/propertySlice';
import PropertyCard from './PropertyCard';
import type { RootState, AppDispatch } from '../redux/store';

interface PropertyListProps {
  filter: 'matches' | 'suggestion';
}

const PropertyList: React.FC<PropertyListProps> = ({ filter }) => {
  const dispatch = useDispatch<AppDispatch>();
  const properties = useSelector((state: RootState) => state.property.properties);
  const status = useSelector((state: RootState) => state.property.status);

  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProperties());
    }
  }, [status, dispatch]);

  const filteredProperties = properties.filter(
    (property) => property.type === filter
  );

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {filter === 'matches' ? 'Your matches' : 'Our suggestions'} ({filteredProperties.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.slice(0, displayCount).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {displayCount < filteredProperties.length && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg"
        >
          More {filter}
        </button>
      )}
    </div>
  );
};

export default PropertyList;
