import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import './Style.css'

function TelaServico() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchedServicos = [
      {
        nome: "Depilação",
        descricao: "Depilação na cera",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Manicure",
        descricao: "Nail design",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Limpeza de pele",
        descricao: "Retira cravos",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Pintura de Cabelo",
        descricao: "Pintura e hidratação",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
    ];
    setServicos(fetchedServicos);
  }, []);

  // Função para deletar um serviço
  const handleDelete = (nome) => {
    setServicos(servicos.filter(servico => servico.nome !== nome));
    alert('Deletado com sucesso');
  };

  return (
    <>
      <SideBar />
      <div className="container2">
        <h1>Serviços</h1>
        <Link to={'/servicos/cadastro'} className="link">
          <button className="Botao4">Adicionar Serviço</button>
        </Link>
        <table>
          <thead>
            <tr className="tabela1">
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade vendida</th>
              <th>Valor total em vendas</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map(servico => (
              <tr key={servico.nome}>
                <td>{servico.nome}</td>
                <td>{servico.descricao}</td>
                <td>{servico.preco}</td>
                <td>{servico.quantidadeVendida}</td>
                <td>{servico.valorTotalVendas}</td>
                <td>
                  <Link to={'/servicos/Editar'}>
                    <button className="Botao3">Editar</button>
                  </Link>
                  <button
                    className="Botao3"
                    onClick={() => handleDelete(servico.nome)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TelaServico;
