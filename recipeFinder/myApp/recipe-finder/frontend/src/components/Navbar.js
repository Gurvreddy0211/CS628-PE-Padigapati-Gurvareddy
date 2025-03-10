// reactrouter.com/en/main/components/link

import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you create this file

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/add-recipe">Add Recipe</Link>
    </nav>
);

export default Navbar;
