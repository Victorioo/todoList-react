/* eslint-disable react/prop-types */

import Hora from "./Hora";
import "../css/Bienvenida.css";
import FechaDia from './FechaDia'


function Bienvenida({ nombre }) {
    
  return (
    <div className="container">
      <div className="content">

        {/* Bienvenida con el nombre en gradiente linear */}
        <h1>
          Bienvenido <span>{nombre}</span>
        </h1>
        {/* Fecha y hora local de la persona */}
        <Hora />
        <FechaDia/>
      </div>
    </div>
  );
}

export default Bienvenida;
