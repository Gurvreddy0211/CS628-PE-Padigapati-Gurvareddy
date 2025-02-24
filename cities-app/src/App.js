// https://reactrouter.com/en/main/start/tutorial
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cities from "./pages/Cities";
import AddCity from "./pages/AddCity";
import CityDetails from "./components/CityDetails";
import "./style.css";

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1>Cities Application</h1>
         {/* Navigation */}
                <nav>
                <Link to="/cities">Cities List</Link> |
                <Link to="/add-city"> Add City</Link>
                </nav>
                {/* Routes */}
                <Routes>
                <Route path="/" element={<Cities />} />
                 <Route path="/cities" element={<Cities />}>
                <Route path=":id" element={<CityDetails />} />
                </Route>
                <Route path="/add-city" element={<AddCity />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
