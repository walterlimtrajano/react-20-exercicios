import React from "react";

export default function NomeCompleto({ nome, sobrenome }) {
  return (
    <p>
      Seu nome completo é: {nome} {sobrenome}
    </p>
  );
}
