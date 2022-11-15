import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Context from "../context/context";

import Ingredients from "../components/Ingredients";

import {formatPrice} from '../utils/utils.js'

const Pizza = () => {
  const { id } = useParams();
  const { menu } = useContext(Context);

  const [pizza, setPizza] = useState({ingredients:[], price: 0});

  useEffect(() => {
    const pizza = menu.filter((item) => item.id == id);
    setPizza(pizza[0]);
  }, []);

  return (
    <main>
      <div className="pizza-view">
        <section
          className="image"
          style={{ backgroundImage: `url(${pizza.img})` }}
        >        </section>
          <article className="content">
            <h4>{pizza.name}</h4>
            <p className="desc">{pizza.desc}</p>

            <Ingredients ingredients={pizza.ingredients} />

            <div className="price-row">
              <h3>Precio: {formatPrice(pizza.price)} </h3>
              <button className="btn">Añadir</button>
            </div>
          </article>
      </div>
    </main>
  );
};

export default Pizza;
