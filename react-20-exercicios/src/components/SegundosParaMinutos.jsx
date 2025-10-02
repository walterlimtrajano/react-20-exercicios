import React from "react";

export default function SegundosParaMinutos({ segundos }) {
  const minutos = (segundos / 60).toFixed(2);
  return (
    <p>
      {segundos} segundos equivalem a {minutos} minutos
    </p>
  );
}
