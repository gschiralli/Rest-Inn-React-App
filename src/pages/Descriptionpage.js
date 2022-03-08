import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Descriptionpage = () => {
  const [property, setProperty] = useState({
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
  });

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://intense-spire-46577.herokuapp.com/properties/${id}`;

    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setProperty(json.data);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>{property.title}</main>
      <Footer />
    </>
  );
};

export default Descriptionpage;
