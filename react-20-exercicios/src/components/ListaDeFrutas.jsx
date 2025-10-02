import React from "react";

export default function ListaDeFrutas({ frutas }) {
  return (
    <div>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}
