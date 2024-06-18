import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import './Style.css'

function TelaProduto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchedProdutos = [
      {
        nome: "Shampoo",
        descricao: "Shampoo Anti-queda",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Condicionador",
        descricao: "Condicionador Hidratante",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Mascara de cílios",
        descricao: "Mascara de Cílios com efeito de volume",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
      {
        nome: "Esmalte",
        descricao: "Esmalte em gel",
        preco: "$80.25",
        quantidadeVendida: 0,
        valorTotalVendas: "$0.00",
      },
    ];
    setProdutos(fetchedProdutos);
  }, []);

  // Função para deletar um produto
  const handleDelete = (nome) => {
    setProdutos(produtos.filter(produto => produto.nome !== nome));
    alert('Deletado com sucesso');
  };

  return (
    <>
      <SideBar />
      <div className="container2">
        <main>
          <h1>Produtos</h1>
          <Link to={'/produtos/cadastro'} className="">
            <button className="Botao4">Adicionar Produto</button>
          </Link>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Quantidade vendida</th>
                <th>Valor total em vendas</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.nome}>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.quantidadeVendida}</td>
                  <td>{produto.valorTotalVendas}</td>
                  <td>
                    <Link to={'/produtos/Editar'}>
                      <button className="Botao3">Editar</button>
                    </Link>
                    <button
                      className="Botao3"
                      onClick={() => handleDelete(produto.nome)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default TelaProduto;
