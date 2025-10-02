import React from "react";
import SomaComEstilo from "./components/SomaComEstilo";
import SubtraiComEstilo from "./components/SubtraiComEstilo";
import MultiplicaComEstilo from "./components/MultiplicaComEstilo";
import DivideComEstilo from "./components/DivideComEstilo";
import EstudoHoje from "./components/EstudoHoje";
import SegundosParaMinutos from "./components/SegundosParaMinutos";
import MinutosParaSegundos from "./components/MinutosParaSegundos";
import HorasParaSegundos from "./components/HorasParaSegundos";
import SegundosParaHoras from "./components/SegundosParaHoras";
import ListaDeFilmesDetalhados from "./components/ListaDeFilmesDetalhados";
import MensagemClima from "./components/MensagemClima";

export default function App() {
  const meusFilmes = [
    { titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019 },
    { titulo: "Interestelar", genero: "Ficção Científica", ano: 2014 },
    { titulo: "O Rei Leão", genero: "Animação", ano: 1994 },
  ];
  return (
    <div style={{ padding: 16 }}>
      <h1>Exercício 1 — Operações Aritméticas com Estilo</h1>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
        <SomaComEstilo num1={12} num2={7} />
        <SubtraiComEstilo num1={12} num2={7} />
        <MultiplicaComEstilo num1={12} num2={7} />
        <DivideComEstilo num1={12} num2={7} />
      </div>
       <div style={{ padding: 16 }}>
      <h1>Exercício 2 — Frase de Estudo Personalizada</h1>
      <EstudoHoje nomeDaTecnologia="JavaScript" />
      <EstudoHoje nomeDaTecnologia="React" />
      <EstudoHoje nomeDaTecnologia="CSS" />
    </div>
    <div style={{ padding: 16 }}>
      <h1>Exercício 3 — Conversões de Unidades de Tempo</h1>
      <SegundosParaMinutos segundos={360} />
      <MinutosParaSegundos minutos={15} />
      <HorasParaSegundos horas={2} />
      <SegundosParaHoras segundos={7200} />
    </div>
    <div style={{ padding: 16 }}>
      <h1>Exercício 4 — Lista de Filmes com Gênero</h1>
      <ListaDeFilmesDetalhados filmes={meusFilmes} />
    </div>
    <div style={{ padding: 16 }}>
      <h1>Exercício 5 — Mensagem de Clima</h1>
      <MensagemClima tipoClima="sol" />
      <MensagemClima tipoClima="chuva" />
      <MensagemClima tipoClima="nublado" />
      <MensagemClima tipoClima="neve" />
    </div>
    </div>
  );
}
