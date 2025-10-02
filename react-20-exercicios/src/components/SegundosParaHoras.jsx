import React from "react";

export default function SegundosParaHoras({ segundos }) {
  const horas = (segundos / 3600).toFixed(2);
  return (
    <p>
      {segundos} segundos equivalem a {horas} horas
    </p>
  );
}
