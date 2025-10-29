import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/Services";
import PortfolioSection from "../components/PortfoloiSection";
import CoreValuesSection from "../components/CoreValuesection";
import Home from "../pages/Home";
 

const RouteConfig = () => {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
        
            <Home />
      
       
        }
      />

      
    </Routes>
  );
};

export default RouteConfig;
