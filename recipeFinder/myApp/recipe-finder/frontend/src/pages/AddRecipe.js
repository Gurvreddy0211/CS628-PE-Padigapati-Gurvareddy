// react.dev/learn/handling-text-input

import React, { useState } from "react";
import { addRecipe } from "../api";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addRecipe({ 
            name, 
            ingredients: ingredients.split(","), 
            instructions 
        });
        navigate("/recipes");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
