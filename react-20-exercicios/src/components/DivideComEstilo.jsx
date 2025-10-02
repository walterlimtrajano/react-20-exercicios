import React from "react";

export default function DivideComEstilo({ num1 = 0, num2 = 1 }) {
  const a = Number(num1);
  const b = Number(num2);

  const resultado =
    b === 0 ? "Erro: divisão por zero" : (a / b).toFixed(4).replace(/\.?0+$/, "");

  return (
    <div className="exercise-card">
      <h4>Divisão</h4>
      <p style={{ color: "#8a2be2", margin: 0 }}>
        {a} ÷ {b} = <strong>{resultado}</strong>
      </p>
    </div>
  );
}
