// react.dev/reference/react/useEffect
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipe, deleteRecipe } from "../api";
import "./RecipeDetails.css"; 
const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        getRecipe(id).then(res => setRecipe(res.data));
    }, [id]);
    const handleDelete = async () => {
        await deleteRecipe(id);
        navigate("/recipes");
    };
    if (!recipe) return <p>Loading...</p>;
    return (
        <div className="recipe-details">
        <h2>{recipe.name}</h2>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
        <button onClick={() => navigate(`/edit-recipe/${id}`)}>Edit</button>
            <button onClick={handleDelete} style={{ backgroundColor: "red", marginLeft: "10px" }}>Delete</button>
        </div>
    );
};
export default RecipeDetails;
