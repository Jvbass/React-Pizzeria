import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Ooops! </h2>
      <p>Algo salio mal, la pagina que buscas no existe.</p>
      <img
        src="https://i.pinimg.com/originals/12/42/8a/12428a39dd237ac1e5e950a9fa367725.png"
        alt="psyduck not found"
      />
      <span>404!</span>
      <Link to="/">
        <button className="btn btn-primary">Volver al home</button>
      </Link>
    </div>
  );
};

export default NotFound;
