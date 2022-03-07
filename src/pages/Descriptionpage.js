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
      <main>
        <div className="flex flex-col-reverse md:block">
          <div className="px-2 sm:px-10 py-6">
            <h1 className="font-bold text-3xl">{property.title}</h1>

            <h6 className=" text-gray-400 underline">{property.location}</h6>
          </div>

          <div className="relative h-72 w-full md:w-2/5 md:px-10 ">
            <img
              src={property.photoURL}
              alt={property.title}
              className=" object-cover w-full h-full md:rounded-sm"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Descriptionpage;
