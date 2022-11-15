import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" ><h2><i className="fa-solid fa-pizza-slice"></i> Mamma - Mia!</h2></Link>
        <Link to="/carrito" ><span className="carrito"><i className="fa-solid fa-cart-shopping"></i> $0</span></Link>
    </div>
  )
}

export default Navbar