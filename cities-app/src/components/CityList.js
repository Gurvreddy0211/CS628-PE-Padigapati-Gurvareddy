// https://reactrouter.com/en/main/components/link
import React from "react";
import { Link } from "react-router-dom";
import { citiesData } from "../data";

const CityList = () => {
    return (
        <div>
        <h2>City List</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        {citiesData.map((city) => (
        <li key={city.id} style={{ marginBottom: "10px" }}>
        <Link 
        to={`/cities/${city.id}`} 
        style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
        {city.name} ➡
        </Link>
        </li>
         ))}
        </ul>
        </div>
    );
};
export default CityList;
