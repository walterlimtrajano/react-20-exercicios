import React from "react";

export default function MensagemEmoji({ mensagem, emoji }) {
  return (
    <p>
      {mensagem} {emoji}
    </p>
  );
}
