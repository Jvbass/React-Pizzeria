// react libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// views
import Home from "./views/Home.jsx";

// components
import Navbar from "./components/Navbar.jsx";

import Context from "./context/context.js";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/pizzas.json')
      .then((res) => res.json())
      .then((json) => {
        setMenu(json);
      })
      .catch((e) => console.log(e));
      }, []);

  const globalState = { menu };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
