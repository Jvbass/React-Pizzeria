import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/context.js";

import Ingredients from "./Ingredients.jsx";

import {formatPrice} from '../utils/utils.js'

const Menu = () => {
  const { menu, addToCart } = useContext(Context);
  const navigate = useNavigate()

  const viewPizza = (id) => navigate(`/pizza/${id}`)
  return (
    <section className="menu">
      {menu.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="card-content">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <Ingredients ingredients={item.ingredients} />
              <h4 className="price">$ {formatPrice(item.price)}</h4>
              <div className="card-btn">
                <button className="btn btn-secondary" onClick={()=> viewPizza(item.id)}>Ver más</button>
                <button className="btn btn-primary" onClick={()=>addToCart(item)}>Añadir</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
