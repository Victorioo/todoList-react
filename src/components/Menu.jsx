import { VscChevronRight } from "react-icons/vsc";
import "../css/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const abrirMenu = () => {
    let menuDesplegable = document.querySelector(".menu");
    let barMenu = document.querySelector(".bars-menu");

    menuDesplegable.classList.toggle("desplegado");

    barMenu.classList.toggle("bars-desplegadas");
  };
  return (
    <>
      <VscChevronRight onClick={abrirMenu} className="bars-menu" />
      <div className="menu">
        <ul className="links-container">
          <li>
            <Link to={"/"} className="links">
              Home
            </Link>
          </li>
          <Link to="/contact" className="links">
            Contacto
          </Link>
          <Link to="/config" className="links">
            Ajustes
          </Link>
          <Link to="/about" className="links">
            Acerca de
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Menu;
