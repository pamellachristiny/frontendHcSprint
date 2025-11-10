// src/pages/Sobre.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-8 text-indigo-700 text-center border-b-4 border-purple-300 pb-3">
          🌟 Sobre o Projeto Ágata
        </h1>
        
        <section className="mb-10 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Objetivo e Escopo do Projeto</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            O **Ágata** é uma solução inovadora que visa transformar o acesso à saúde para pacientes com desafios motores, cognitivos ou tecnológicos. Em vez de se adaptarem a sistemas complexos de agendamento e teleconsulta, eles agora têm uma ferramenta desenvolvida pensando em suas necessidades específicas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nosso principal objetivo é conectar esses pacientes com os profissionais de saúde ideais de forma simples e direta. Utilizando o aplicativo do HC, os pacientes receberão **notificações intuitivas e fixas** que servem como atalhos diretos para as teleconsultas, eliminando barreiras e simplificando o processo do início ao fim. Com o Ágata, a saúde digital se torna acessível a todos.
          </p>
        </section>

        <section className="p-6 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-500">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Descrição das Funções de Notificação</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Temos três opções principais de atuação para garantir que o paciente não perca sua teleconsulta:
          </p>
          
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              **Processo de Notificação Fixa e Pontual:** Esta notificação serve como um atalho direto. Para interação, basta clicar no botão "ENTRAR", que levará o paciente diretamente para a sala virtual da consulta.
            </li>
            <li>
              **Processo de Notificação de Pré-Consulta:** Este aviso é enviado antes do horário agendado. Ao clicar no botão "ENTRAR", o paciente é direcionado para a sala de espera virtual.
            </li>
            <li>
              **Processo de Notificação de Consulta Atrasada:** Caso a consulta já tenha iniciado, esta notificação alerta o paciente. Ao clicar no botão "ENTRAR", ele será levado diretamente para a sala virtual.
            </li>
          </ul>
        </section>

      </div>
      <Footer />
    </>
  );
}