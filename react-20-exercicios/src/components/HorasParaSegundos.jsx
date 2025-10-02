import React from "react";

export default function HorasParaSegundos({ horas }) {
  const segundos = horas * 3600;
  return (
    <p>
      {horas} horas equivalem a {segundos} segundos
    </p>
  );
}
