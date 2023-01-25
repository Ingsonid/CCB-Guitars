

const CategoriasBass = () => {
  return (
    <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn-dark">Bajos</button> 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Warwick</a></li>
              <li><a className="dropdown-item" href="#">Dingwall</a></li>
              {/* <li><hr className="dropdown-divider" /></li> */}
              <li><a className="dropdown-item" href="#">Sadowsky</a></li>
              <li><a className="dropdown-item" href="#">Spector</a></li>
            </ul>
          </li>

          


  );
}

export default CategoriasBass;
