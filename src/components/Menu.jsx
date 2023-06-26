import { VscChevronRight } from "react-icons/vsc";
import "../css/Menu.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlinePhone,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import { TbSunFilled, TbSunHigh } from "react-icons/tb";

// ? Funcion que despliega el menú

function Menu() {
  const abrirMenu = () => {
    let menuDesplegable = document.querySelector(".menu");
    let barMenu = document.querySelector(".bars-menu");

    menuDesplegable.classList.toggle("desplegado");

    barMenu.classList.toggle("bars-desplegadas");
  };

  const switchMode = () => {
    let body = document.body;
    body.classList.toggle("darkMode");
    let iconDark = document.querySelector(".dark");
    let iconLight = document.querySelector(".light");

    if (iconDark.classList.contains("hidden")) {
      iconDark.classList.toggle("hidden");
      iconLight.classList.toggle('hidden');
    } else {
      iconDark.classList.toggle('hidden')
      iconLight.classList.toggle('hidden')
    }
}

  return (
    <>
      <VscChevronRight onClick={abrirMenu} className="bars-menu" />
      <div className="menu">
        <ul className="links-container">
          <Link to={"/"} className="links">
            <AiOutlineHome />
            Home
          </Link>

          <Link to="/contact" className="links">
            <AiOutlinePhone />
            Contacto
          </Link>

          <Link to="/config" className="links">
            <AiOutlineSetting />
            Ajustes
          </Link>

          <Link to="/about" className="links">
            <AiOutlineInfoCircle />
            Acerca de
          </Link>

          <button className="switch-mode" onClick={switchMode}>
            <TbSunFilled className="icon dark hidden" />
            <TbSunHigh className="icon light" />
          </button>
        </ul>
      </div>
    </>
  );
}

export default Menu;
