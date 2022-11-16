import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <main className="checkout">
      <img
        src="https://acegif.com/wp-content/uploads/gifs/pizza-64.gif"
        alt=""
      />
      <p>Redireccionando a tu medio de pago...</p>
      <Link to="/carrito">
        <button className="btn btn-primary">Volver</button>
      </Link>
    </main>
  );
};

export default Checkout;
