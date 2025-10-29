import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteConfig from "./routes";
 

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Header />
     
          <RouteConfig />
     
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
