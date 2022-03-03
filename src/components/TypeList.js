import TypeCard from "./TypeCard";
import { useState, useEffect } from "react";

const TypeList = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);
  useEffect(() => {
    const URL = "https://intense-spire-46577.herokuapp.com/properties/types";
    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setPropertyTypes(json.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {propertyTypes.map((item, idx) => (
        <TypeCard key={item + idx} type={item} />
      ))}
    </div>
  );
};

export default TypeList;
