import { formatPrice } from "../utils/utils";

const CartList = ({ cart, addToCart }) => {
  return (
    <div className="cart-view">
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <div className="product">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </div>

              <div className="price">
                <span>${formatPrice(item.price * item.count)}</span>
                <div className="btns">
                    <button className="btn-secondary btn-cart">-</button>
                    <p className="bold">{item.count}</p>
                    <button className="btn-primary btn-cart" onClick={()=>addToCart(item)}>+</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <h3>Total: $0</h3>
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
};

export default CartList;
