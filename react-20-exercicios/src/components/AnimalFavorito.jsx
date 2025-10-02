import React from "react";

export default function AnimalFavorito({ animal }) {
  let mensagem;

  if (animal === "cachorro") {
    mensagem = "🐶 Eu amo cachorros!";
  } else if (animal === "gato") {
    mensagem = "🐱 Eu amo gatos!";
  } else {
    mensagem = "🐾 Amo todos os animais!";
  }

  return <p>{mensagem}</p>;
}
