import React from "react";

export default function MensagemNota({ nota }) {
  let mensagem;

  if (nota >= 7) {
    mensagem = "✅ Aprovado";
  } else if (nota >= 5) {
    mensagem = "⚠️ Recuperação";
  } else {
    mensagem = "❌ Reprovado";
  }

  return (
    <p>
      Nota: <strong>{nota}</strong> → {mensagem}
    </p>
  );
}
