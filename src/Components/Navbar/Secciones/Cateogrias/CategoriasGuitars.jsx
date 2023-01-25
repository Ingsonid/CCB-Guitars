

const CategoriasGuitar = () => {
  return (
    <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn-dark">Guitarras</button> 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Charvel</a></li>
              <li><a className="dropdown-item" href="#">Jackson</a></li>
              {/* <li><hr className="dropdown-divider" /></li> */}
              <li><a className="dropdown-item" href="#">Gibson</a></li>
              <li><a className="dropdown-item" href="#">Fender</a></li>
            </ul>
          </li>

          


  );
}

export default CategoriasGuitar;
