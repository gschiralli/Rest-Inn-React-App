import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TypeCard from "../components/TypeCard";

function Homepage() {
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
      photoUrl: "",
    },
  ]);

  useEffect(() => {
    const URL = "https://intense-spire-46577.herokuapp.com/properties";
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
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Property Types</h2>
          {properties.map((item) => (
            <TypeCard />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
