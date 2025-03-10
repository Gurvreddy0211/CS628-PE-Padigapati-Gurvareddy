// react.dev/reference/react/useEffect
// react.dev/reference/react/useState
import { useEffect, useState } from "react";
import { getRecipes } from "../api";
import { Link } from "react-router-dom";
import "./RecipeList.css"; 
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then(res => setRecipes(res.data));
    }, []);
    return (
        <div className="recipe-list">
        {recipes.map(recipe => (
        <div key={recipe._id} className="recipe-card">
          <h3>{recipe.name}</h3>
        <Link to={`/recipes/${recipe._id}`}>View Details</Link>
        </div>
         ))}
        </div>
    );
};
export default RecipeList;
