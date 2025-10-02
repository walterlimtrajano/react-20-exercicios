import React from "react";
import Produto from "./Produto";

export default function ListaProdutos({ produtos }) {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {produtos.map((item, index) => (
          <Produto 
            key={index}
            nome={item.nome}
            preco={item.preco}
            categoria={item.categoria}
          />
        ))}
      </div>
    </div>
  );
}
