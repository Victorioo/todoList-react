// import React from "react";

function FechaDia() {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const monthsOfYear = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const obtenerFechaActual = new Date();
  const diaActual = daysOfWeek[obtenerFechaActual.getDay()];
  const mesActual = monthsOfYear[obtenerFechaActual.getMonth()]
  const añoActual = obtenerFechaActual.getFullYear();

  return (
    <div>
      <h3>{diaActual} de {mesActual}, {añoActual}</h3>
    </div>
  );
}

export default FechaDia;
