// src/pages/Solucao.tsx

import React, { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
// @ts-ignore
import { getAgendamentos, criarAgendamento, atualizarAgendamento, deletarAgendamento } from '../services/agendamentoServices'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

// Definição das Interfaces (Tipos)
interface Consulta {
  id: number;
  nomeMedico: string;
  dataConsulta: string; 
  especialidade: string;
}

interface NovoAgendamento {
  nomeMedico: string;
  dataConsulta: string;
  especialidade: string;
}

export default function Solucao() {
  const [agendamentos, setAgendamentos] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const [novoAgendamento, setNovoAgendamento] = useState<NovoAgendamento>({
    nomeMedico: '',
    dataConsulta: '',
    especialidade: '',
  });

  // Novos estados para a funcionalidade PUT (Editar)
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [agendamentoEditando, setAgendamentoEditando] = useState<Consulta | null>(null);


  // FUNÇÕES DE CARREGAMENTO E MANIPULAÇÃO DE ESTADO
  async function carregarAgendamentos() {
    try {
      setLoading(true);
      setError(null);
      const lista = await getAgendamentos(); 
      setAgendamentos(lista);
    } catch (err) {
      setError("Não foi possível carregar as consultas.");
      console.error("Erro no componente Solucao:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarAgendamentos();
  }, []);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNovoAgendamento(prev => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (agendamentoEditando) {
      setAgendamentoEditando(prev => prev ? ({ ...prev, [name]: value }) : null);
    }
  };

  // FUNÇÃO POST (Criar)
  const handleSubmit = async (e: FormEvent) => { /* ... (Mantido como estava) ... */ };


  // 1. FUNÇÃO DELETE (Cancelar Agendamento)
  const handleDeletar = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja cancelar esta consulta?")) {
      return;
    }
    
    setLoading(true);
    try {
      await deletarAgendamento(id);
      alert("Consulta cancelada com sucesso!");
      
      // Remove o agendamento da lista local (sem recarregar)
      setAgendamentos(prev => prev.filter(a => a.id !== id));
      
    } catch (error) {
      alert("Falha ao cancelar a consulta.");
    } finally {
      setLoading(false);
    }
  };

  // 2. FUNÇÃO INICIAR EDIÇÃO
  const iniciarEdicao = (agendamento: Consulta) => {
    setAgendamentoEditando(agendamento);
    setIsEditing(true);
  };
  
  // 3. FUNÇÃO PUT (Salvar Edição)
  const handleSalvarEdicao = async (e: FormEvent) => {
    e.preventDefault();
    if (!agendamentoEditando) return;
    
    setIsSubmitting(true);
    try {
      // Chamada PUT: ID + dados completos
      const atualizado = await atualizarAgendamento(agendamentoEditando.id, agendamentoEditando);
      
      alert(`Consulta ${agendamentoEditando.id} atualizada com sucesso!`);
      
      // Atualiza a lista com o item modificado
      setAgendamentos(prev => prev.map(a => a.id === atualizado.id ? atualizado : a));
      
      // Fecha o modo de edição
      setIsEditing(false);
      setAgendamentoEditando(null);

    } catch (error) {
      alert("Falha ao atualizar a consulta.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // =========================================================
  // Renderização
  // =========================================================

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700 text-center">
          📅 Minhas Teleconsultas (Ágata)
        </h1>
        
        {/* Botão para mostrar/esconder o formulário POST */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            aria-expanded={showForm}
            disabled={isEditing} // Desabilita se estiver editando
          >
            {showForm ? '❌ Cancelar Agendamento' : '➕ Agendar Nova Consulta'}
          </button>
        </div>

        {/* 4. MODAL/FORMULÁRIO DE EDIÇÃO (PUT) */}
        {isEditing && agendamentoEditando && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">Editar Agendamento {agendamentoEditando.id}</h2>
              <form onSubmit={handleSalvarEdicao}>
                
                {/* Campos de Edição */}
                <div className="mb-4">
                  <label htmlFor="editNomeMedico" className="block text-gray-700 font-medium mb-1">Nome do Médico</label>
                  <input
                    type="text"
                    id="editNomeMedico"
                    name="nomeMedico"
                    value={agendamentoEditando.nomeMedico}
                    onChange={handleEditChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Adicione outros campos aqui (dataConsulta, especialidade, etc.) */}
                
                {/* Botões Salvar e Cancelar */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:bg-purple-300"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Formulário POST (Novo Agendamento) ... (mantido como estava) */}
        {showForm && ( /* ... */ )}


        {/* Lista de Agendamentos (GET) */}
        {loading && ( /* ... */ )}
        {error && ( /* ... */ )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agendamentos.length > 0 ? (
              agendamentos.map((agendamento) => (
                <div key={agendamento.id} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Dr(a). {agendamento.nomeMedico || 'Não Informado'}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">ID: {agendamento.id}</p>
                  <p><strong>Data:</strong> {agendamento.dataConsulta}</p>
                  <p><strong>Especialidade:</strong> {agendamento.especialidade}</p>
                  
                  {/* 5. BOTÕES DE AÇÃO PUT (EDITAR) E DELETE (CANCELAR) */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => iniciarEdicao(agendamento)}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg text-sm transition duration-300"
                      disabled={isEditing}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDeletar(agendamento.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg text-sm transition duration-300"
                      disabled={isEditing}
                    >
                      🗑️ Cancelar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600 text-lg">
                Nenhuma consulta agendada encontrada.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}