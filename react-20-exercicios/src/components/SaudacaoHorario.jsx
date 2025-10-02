import React from "react";

export default function SaudacaoHorario({ hora }) {
  let mensagem = "";

  if (hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  return <h2>{mensagem}</h2>;
}
