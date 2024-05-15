import Image from 'next/image';

interface Property {
  id: number;
  name: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  type: 'matches' | 'suggestion';
  photo: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {

  return (
    <div className="bg-white overflow-hidden">
      <Image src={property.photo} alt={property.name} width={100} height={48} className="w-full h-48 object-cover" />
      <div className="py-4 flex">
        <div className="text-start w-full">
            <h3 className="text-xl font-semibold text-black">{property.name}</h3>
            <p className="text-black">{property.address}</p>
        </div>
        <div className="text-end w-full">
            <p className="text-gray-800">{property.price}</p>
            <p className="text-gray-400">{property.bedrooms} Bedrooms * {property.bathrooms} Bathrooms</p>
        </div>
       </div>
    </div>
  );
};

export default PropertyCard;
