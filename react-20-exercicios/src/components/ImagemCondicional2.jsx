import React from "react";

export default function ImagemCondicional2({ tipoImagem }) {
  let imagemSrc = "";
  let altText = "";

  if (tipoImagem === "LOGO") {
    imagemSrc = "/logo.png";
    altText = "Logo da aplicação";
  } else if (tipoImagem === "PERSONAGEM") {
    imagemSrc = "/personagem.png";
    altText = "Imagem do personagem";
  } else {
    return <p>Tipo de imagem não reconhecido ❌</p>;
  }

  return <img src={imagemSrc} alt={altText} width="200" />;
}
