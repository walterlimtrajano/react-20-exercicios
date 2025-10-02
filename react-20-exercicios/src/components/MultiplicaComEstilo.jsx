import React from "react";

export default function MultiplicaComEstilo({ num1 = 0, num2 = 0 }) {
  const a = Number(num1);
  const b = Number(num2);
  const resultado = a * b;

  return (
    <div className="exercise-card">
      <h4>Multiplicação</h4>
      <p style={{ color: "#2e8b57", margin: 0 }}>
        {a} × {b} = <strong>{resultado}</strong>
      </p>
    </div>
  );
}
