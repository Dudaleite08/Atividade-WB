import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import './Style.css'

function Cliente() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchedClientes = [
      {
        nome: "Maria Eduarda Peleteiro Leite",
        cpf: "111.211.111-11",
        genero: "Feminino",
        dataNascimento: "08/04/2004",
        comprasProdutos: "$0.00",
        comprasServicos: "$0.00",
      },
      {
        nome: "Nicolas Augusto Santiago",
        cpf: "333.333.333-33",
        genero: "Masculino",
        dataNascimento: "23/08/2000",
        comprasProdutos: "$0.00",
        comprasServicos: "$0.00",
      },
      {
        nome: "Raianny Marcela",
        cpf: "444.444.444-44",
        genero: "Feminino",
        dataNascimento: "10/05/1998",
        comprasProdutos: "$0.00",
        comprasServicos: "$0.00",
      },
      {
        nome: "Ricardo Soares",
        cpf: "555.555.555-55",
        genero: "Masculino",
        dataNascimento: "06/12/1977",
        comprasProdutos: "$0.00",
        comprasServicos: "$0.00",
      },
    ];
    setClientes(fetchedClientes);
  }, []);

  // Função para deletar um cliente
  const handleDelete = (cpf) => {
    setClientes(clientes.filter(cliente => cliente.cpf !== cpf));
    alert('Deletado com sucesso');
  };

  return (
    <>
      <SideBar />
      <div className="container2">
        <h1>Clientes</h1>
        <Link to={'/clientes/cadastro'}>
          <button className='Botao4'>Cadastrar Cliente</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Genero</th>
              <th>Data de nascimento</th>
              <th>Compras de produtos</th>
              <th>Compras de servicos</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.cpf}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.genero}</td>
                <td>{cliente.dataNascimento}</td>
                <td>{cliente.comprasProdutos}</td>
                <td>{cliente.comprasServicos}</td>
                <td>
                  <Link to={'/clientes/Editar'}>
                    <button className="Botao3">Editar</button>
                  </Link>
                  <button
                    className="Botao3"
                    onClick={() => handleDelete(cliente.cpf)}
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

export default Cliente;
