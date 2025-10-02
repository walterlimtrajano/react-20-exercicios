import React from "react";

export default function CorFavorita({ cor }) {
  const estilo = {
    width: "100px",
    height: "100px",
    backgroundColor: cor,
    border: "2px solid #333",
    borderRadius: "8px",
    margin: "8px"
  };

  return <div style={estilo}></div>;
}
