import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

const BestSellerList = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      _id: 0,
      title: "",
      rentalPrice: 0,
      description: null,
      type: "",
      houseRules: [],
      amenities: [],
      location: "",
      bestSeller: null,
      photoURL: "",
    },
  ]);

  useEffect(() => {
    const URL =
      "https://intense-spire-46577.herokuapp.com/properties/best-sellers";

    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setBestSellers(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {bestSellers.map((item) => (
        <PropertyCard
          key={item._id}
          img={item.photoURL}
          title={item.title}
          price={item.rentalPrice}
        />
      ))}
    </div>
  );
};

export default BestSellerList;
