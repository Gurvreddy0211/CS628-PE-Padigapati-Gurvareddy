// react.dev/learn/handling-text-input

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, updateRecipe } from "../api";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        getRecipe(id).then((res) => {
            setName(res.data.name);
            setIngredients(res.data.ingredients.join(", "));
            setInstructions(res.data.instructions);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateRecipe(id, { name, ingredients: ingredients.split(","), instructions });
        navigate("/recipes");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipe;
