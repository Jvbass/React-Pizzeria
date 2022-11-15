import CartList from "../components/CartList";
import { useContext } from "react";
import Context from "../context/context";

const Cart = () => {
  const { cart } = useContext(Context);

  return (
    <main>
      <div className="cart">
        <h2>Detalles del pedido</h2>
        {
            cart.length !==0 ? 
            <CartList cart={cart}></CartList> 
            : <p> no hay elementos en tu carrito</p>
        }
      </div>
    </main>
  );
};

export default Cart;