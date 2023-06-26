// import { useState } from 'react'
import { VscChevronRight } from "react-icons/vsc";
import '../css/Menu.css'

function Menu() {
    const abrirMenu = ()=>{
        let menuDesplegable = document.querySelector(".menu");
        let barMenu = document.querySelector(".bars-menu");

        menuDesplegable.classList.toggle("desplegado");

        barMenu.classList.toggle("bars-desplegadas");
    }
  return (
    <>
        <VscChevronRight onClick={abrirMenu} className="bars-menu"/>
      <div className="menu">
        <ul className="links-container">
            <li className="links">Home</li>
            <li className="links">About</li>
            <li className="links">Contact</li>
            <li className="links">Ajustes</li>
            <li className="links">Acerca de</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
