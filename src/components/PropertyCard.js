const PropertyCard = ({ img, title, price }) => {
  return (
    <div>
      <div className="relative h-80 w-80 cursor-pointer">
        {console.log(img)}
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-3xl mt-3">{title}</h3>
    </div>
  );
};

export default PropertyCard;
