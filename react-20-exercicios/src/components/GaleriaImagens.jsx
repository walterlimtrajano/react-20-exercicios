import React from "react";

export default function GaleriaImagens({ img1, img2, img3 }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <img src={img1} alt="Imagem 1" width="150" />
      <img src={img2} alt="Imagem 2" width="150" />
      <img src={img3} alt="Imagem 3" width="150" />
    </div>
  );
}
