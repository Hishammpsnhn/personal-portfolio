import React from "react";
import './App.css'
import Footer from "./componats/Home/Footer/Footer";
import Home from "./componats/Home/Home";
import ScrollTop from "./componats/Scroll btn/ScrollTop";

import Profile from "./componats/Home/Profile/Profile";

function App() {
  return (
    <nav>
    <div className="App">
     <Home/>
    <ScrollTop/>
    </div>
    </nav>
  );
}

export default App;
