import { formatPrice } from "../utils/utils";

const CartList = ({ cart }) => {
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
                <span>${formatPrice(item.price)}</span>
                <div className="btns">
                    <button className="btn">-</button>
                    <p className="bold">1</p>
                    <button className="btn">+</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <h3>Total: $0</h3>
      </div>
    </div>
  );
};

export default CartList;
