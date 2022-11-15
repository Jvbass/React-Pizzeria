import { useContext } from "react";
import Context from "../context/context.js";

import Ingredients from "./Ingredients.jsx";

const Menu = () => {
  const { menu } = useContext(Context);

  return (
    <section className="menu">
      {menu.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="card-content">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <Ingredients ingredients={item.ingredients} />
              <h4 className="price">$ {item.price}</h4>
              <div className="card-btn">
                <button className="btn btn-secondary">Ver más</button>
                <button className="btn btn-primary">Añadir</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
