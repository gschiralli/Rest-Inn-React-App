import Apartment from "../assets/images/Apartment.jpg";
import Condo from "../assets/images/Condo.jpg";
import Resort from "../assets/images/Resort.jpg";
import Cabin from "../assets/images/Cabin.jpg";

function findImg(type) {
  if (type === "Apartment") {
    return Apartment;
  } else if (type === "Condo") {
    return Condo;
  } else if (type === "Cabin") {
    return Cabin;
  } else if (type === "Resort") {
    return Resort;
  } else {
    return Cabin;
    //change to null
  }
}
const TypeCard = ({ type }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-28 w-28">
        <img
          src={findImg(type)}
          alt={type}
          className="object-cover rounded-lg h-full w-full"
        />
      </div>
      <div>
        <h2 className=" font-semibold">{`${type}s`}</h2>
      </div>
    </div>
  );
};

export default TypeCard;
