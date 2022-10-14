import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";

const Typepage = () => {
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
  const { type } = useParams();

  useEffect(() => {
    const URL = `https://polar-plains-40024.herokuapp.com/properties?type=${type}`;

    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setProperties(json.data);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main className="px-10 pt-7">
        <h1 className="text-3xl font-semibold mt-2 mb-6">{type} Listings</h1>
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

export default Typepage;
