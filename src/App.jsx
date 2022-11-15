// react libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// views
import Home from "./views/Home.jsx";
import Pizza from "./views/Pizza.jsx"
import Cart from "./views/Cart.jsx";
import NotFound from "./views/NotFound.jsx";

// components
import Navbar from "./components/Navbar.jsx";

import Context from "./context/context.js";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([
    {
      "desc": "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
      "id": "P001",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
      "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
      "name": "napolitana",
      "price": 5950
    }
  ])

  useEffect(() => {
    fetch('/pizzas.json')
      .then((res) => res.json())
      .then((json) => {
        setMenu(json);
      })
      .catch((e) => console.log(e));
      }, []);

  const globalState = { menu, cart };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
