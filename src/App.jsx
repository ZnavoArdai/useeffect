import "./App.css";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./component/pages/Router.component";
import Header from "./component/pages/header/header";
import Footer from "./component/pages/footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Router/>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
