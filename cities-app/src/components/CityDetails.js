// https://reactrouter.com/en/main/hooks/use-params
import React from "react";
import { useParams } from "react-router-dom";
import { citiesData } from "../data";
const CityDetails = () => {
    const { id } = useParams();
    const city = citiesData.find((c) => c.id === parseInt(id));
    if (!city) {
        return <h2></h2>;
    }
    return (
        <div>
        <h2>City Details</h2>
        <p><strong>Name:</strong> {city.name}</p>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population}</p>
        </div>
    );
};
export default CityDetails;
