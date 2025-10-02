import React from "react";

export default function MinutosParaSegundos({ minutos }) {
  const segundos = minutos * 60;
  return (
    <p>
      {minutos} minutos equivalem a {segundos} segundos
    </p>
  );
}
