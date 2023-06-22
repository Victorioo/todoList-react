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
  const fechaActual = obtenerFechaActual.getDate()
  const mesActual = monthsOfYear[obtenerFechaActual.getMonth()]
  const añoActual = obtenerFechaActual.getFullYear();

  return (
    <div>
      <h3>{diaActual} {fechaActual} de {mesActual}, {añoActual}</h3>
    </div>
  );
}

export default FechaDia;
