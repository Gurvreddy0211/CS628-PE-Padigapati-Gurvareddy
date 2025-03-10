// reactrouter.com/en/main/start/tutorial
//reactrouter.com/en/main/components/routes
// reactrouter.com/en/main/hooks/use-navigate

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetails from "./components/RecipeDetails";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
                <Route path="/edit-recipe/:id" element={<EditRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
