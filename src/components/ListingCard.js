import { FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListingCard = ({ img, title, price, type, location, bestSeller, id }) => {
  return (
    <Link to={`/properties/${id}`}>
      <div className=" sm:flex py-7 px-2 border-b cursor-pointer hover:opacity-90 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="flex flex-col flex-grow sm:pl-5 pt-2">
          <div className="flex justify-between">
            <h4 className="text-2xl font-semibold">{title}</h4>
          </div>
          <p className=" text-gray-500 text-sm">located in {location}</p>
          <div className="border-b w-10 pt-2"></div>
          <h6 className=" font-semibold text-sm pt-2">Property Type</h6>
          <p className=" text-xs text-gray-500 pt-1 flex-grow"> - {type}</p>
          <div className="flex justify-between items-end pt-5">
            {bestSeller ? (
              <div className="flex items-center h-5 text-green-500 space-x-2">
                <FiThumbsUp />
                <p>best-seller</p>
              </div>
            ) : (
              <div> </div>
            )}
            <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">
                ${price} / Night
              </p>
              <button className="bg-blue-500 rounded-3xl py-2 px-4 text-white font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
