// src/services/api.ts
const API_BASE = "https://sua-api-java.com";

export async function getConsultas() {
  const res = await fetch(`${API_BASE}/consultas`);
  if (!res.ok) throw new Error("Erro ao buscar consultas");
  return res.json();
}
