import React from "react";

export default function EstudoHoje({ nomeDaTecnologia = "React" }) {
  return (
    <div className="exercise-card">
      <h4>Estudo de Hoje</h4>
      <p>
        Hoje eu quero estudar: <strong>{nomeDaTecnologia}</strong>
      </p>
    </div>
  );
}
