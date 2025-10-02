import React from "react";

export default function StatusConexao({ online }) {
  return (
    <h2>
      {online ? "Conectado ✅" : "Desconectado ❌"}
    </h2>
  );
}
