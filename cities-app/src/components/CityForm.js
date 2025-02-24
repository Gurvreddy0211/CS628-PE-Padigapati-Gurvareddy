//  https://react.dev/learn/adding-interactivity#state-as-a-snapshot

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { citiesData } from "../data";
const CityForm = () => {
    const [city, setCity] = useState({ name: "", country: "", population: "" });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCity({ ...city, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        citiesData.push({ ...city, id: citiesData.length + 1 });
        navigate("/cities"); // Redirect after submission
    };
    return (
        <div>
            <h2>Add a New City</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="City Name" value={city.name} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" value={city.country} onChange={handleChange} required />
            <input type="text" name="population" placeholder="Population" value={city.population} onChange={handleChange} required />
            <button type="submit">Add City</button>
            </form>
        </div>
    );
};

export default CityForm;
