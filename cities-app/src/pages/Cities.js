import React from "react";
import { Outlet } from "react-router-dom";
import CityList from "../components/CityList";

const Cities = () => {
    return (
        <div>
        <CityList />
        <Outlet /> {}
        </div>
    );
};

export default Cities;
