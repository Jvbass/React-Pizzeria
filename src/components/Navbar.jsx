import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context.js";

const Navbar = () => {
  const { cartTotal } = useContext(Context);

  return (
    <div className="navbar">
      <Link to="/">
        <h2>
          <i className="fa-solid fa-pizza-slice"></i> Mamma - Mia!
        </h2>
      </Link>
      <Link to="/carrito">
        <span className="carrito">
          <i className="fa-solid fa-cart-shopping"></i> ${cartTotal()}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
