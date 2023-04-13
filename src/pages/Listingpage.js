import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";

const Listingpage = () => {
  const [properties, setProperties] = useState([
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
    const URL = "https://curious-bonnet-dog.cyclic.app/properties";

    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setProperties(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <main className="px-10 pt-7">
        <h1 className="text-3xl font-semibold mt-2 mb-6">Listings</h1>
        <section className="flex flex-col">
          {properties.map((property) => (
            <ListingCard
              id={property._id}
              key={property._id}
              img={property.photoURL}
              title={property.title}
              price={property.rentalPrice}
              type={property.type}
              location={property.location}
              bestSeller={property.bestSeller}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Listingpage;
