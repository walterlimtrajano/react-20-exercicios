import React from "react";

export default function Produto({ nome, preco, categoria }) {
  return (
    <div style={{
      border: "2px solid #4caf50",
      borderRadius: "8px",
      padding: "12px",
      margin: "10px",
      width: "220px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>{nome}</h3>
      <p><strong>Preço:</strong> R$ {preco}</p>
      <p><strong>Categoria:</strong> {categoria}</p>
    </div>
  );
}
