import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";  
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  
  return (
    <>
      <Header/>
      <main>
        <AllRoutes/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
