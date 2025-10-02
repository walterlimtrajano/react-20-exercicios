import React from "react";

export default function FilmeDetalhado({ titulo, genero, ano }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "5px",
      borderRadius: "8px"
    }}>
      <h3>{titulo}</h3>
      <p><strong>Gênero:</strong> {genero}</p>
      <p><strong>Ano:</strong> {ano}</p>
    </div>
  );
}
