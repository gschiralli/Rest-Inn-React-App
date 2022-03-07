import { Link } from "react-router-dom";

const PropertyCard = ({ img, title, price, id }) => {
  return (
    <Link to={`properties/${id}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-4 rounded overflow-hidden shadow-md">
        <img
          src={img}
          alt={title}
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">${price} / night</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
