// react libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// views
import Home from "./views/Home.jsx";
import Pizza from "./views/Pizza.jsx";
import Cart from "./views/Cart.jsx";
import NotFound from "./views/NotFound.jsx";

// components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Context from "./context/context.js";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    //funcion agrega pizza al carro
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id);
    //verifica si la pizza que vamos a agregar ya existe, si no devuelve -1

    const updateCart = [...cart];

    if (itemIndex === -1) {
      //si no existe pizza en el carro hacemos push  
      const pizza = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name,
      };
      updateCart.push(pizza);
    } else {
      updateCart[itemIndex].count += 1; //si existe sumamos 1 en campo cuenta
    }
    setCart(updateCart)
  };

  useEffect(() => {
    fetch("/pizzas.json")
      .then((res) => res.json())
      .then((json) => {
        setMenu(json);
      })
      .catch((e) => console.log(e));
  }, []);

  const globalState = { menu, cart, addToCart };

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
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
