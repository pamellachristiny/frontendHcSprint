// src/services/agendamentoServices.js

// A URL BASE deve ser declarada APENAS UMA VEZ no topo do arquivo.
const BASE_URL = 'https://teleconsultajava.onrender.com/agendamentos';

// =================================================================
// 1. GET (Listar Agendamentos) - Leitura
// =================================================================
export async function getAgendamentos() {
  try {
    const response = await fetch(BASE_URL); 

    if (!response.ok) {
      // Tenta obter a mensagem de erro da API para dar um feedback melhor
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido.' }));
      throw new Error(`Erro HTTP: ${response.status} - ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Erro ao listar agendamentos:", error.message);
    // Tratamento de erros para o usuário
    alert(`Não foi possível carregar a lista de consultas. Detalhes: ${error.message}`); 
    throw error;
  }
}

// =================================================================
// 2. POST (Criar Novo Agendamento) - Criação
// =================================================================
export async function criarAgendamento(novoAgendamento) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoAgendamento), 
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido.' }));
      throw new Error(`Falha ao criar agendamento (Status ${response.status}): ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Erro ao criar agendamento:", error.message);
    alert(`Erro ao agendar: ${error.message}`);
    throw error;
  }
}

// =================================================================
// 3. PUT (Atualizar Agendamento Existente) - Atualização
// =================================================================
export async function atualizarAgendamento(id, dadosAtualizados) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosAtualizados), 
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido ao atualizar.' }));
      throw new Error(`Falha ao atualizar agendamento (Status ${response.status}): ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Erro ao atualizar agendamento:", error.message);
    alert(`Erro ao atualizar agendamento: ${error.message}`);
    throw error;
  }
}

// =================================================================
// 4. DELETE (Deletar Agendamento) - Exclusão
// =================================================================
export async function deletarAgendamento(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE', 
      // DELETE geralmente não tem corpo
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido ao deletar.' }));
      throw new Error(`Falha ao deletar agendamento (Status ${response.status}): ${errorData.message || response.statusText}`);
    }

    // Retorna true para indicar sucesso na exclusão (Status 204 No Content)
    return true; 

  } catch (error) {
    console.error("Erro ao deletar agendamento:", error.message);
    alert(`Erro ao deletar agendamento: ${error.message}`);
    throw error;
  }
}