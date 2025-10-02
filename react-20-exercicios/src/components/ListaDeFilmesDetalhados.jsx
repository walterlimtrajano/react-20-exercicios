import React from "react";
import FilmeDetalhado from "./FilmeDetalhado";

export default function ListaDeFilmesDetalhados({ filmes }) {
  return (
    <div>
      <h2>Lista de Filmes</h2>
      {filmes.map((filme, index) => (
        <FilmeDetalhado
          key={index}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
        />
      ))}
    </div>
  );
}
