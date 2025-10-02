import React from "react";
import SomaComEstilo from "./components/SomaComEstilo";
import SubtraiComEstilo from "./components/SubtraiComEstilo";
import MultiplicaComEstilo from "./components/MultiplicaComEstilo";
import DivideComEstilo from "./components/DivideComEstilo";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Exercício 1 — Operações Aritméticas com Estilo</h1>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
        <SomaComEstilo num1={12} num2={7} />
        <SubtraiComEstilo num1={12} num2={7} />
        <MultiplicaComEstilo num1={12} num2={7} />
        <DivideComEstilo num1={12} num2={7} />
      </div>
    </div>
  );
}
