import React from "react";

export default function MensagemClima({ tipoClima }) {
  let mensagem;

  if (tipoClima === "sol") {
    mensagem = "Dia ensolarado ☀️";
  } else if (tipoClima === "chuva") {
    mensagem = "Leve seu guarda-chuva ☔";
  } else if (tipoClima === "nublado") {
    mensagem = "Dia nublado ⛅";
  } else {
    mensagem = "Clima desconhecido 🌍";
  }

  return <p>{mensagem}</p>;
}
