import React, { useState } from 'react';
import SideBar from '../components/sidebar/sidebar';
import Combobox from "react-widgets/Combobox";
import NumberPicker from 'react-widgets/NumberPicker';
import './Style.css';

function Vendas() {
  const [clientes] = useState(["Maria", "Jaqueline", "Nicolas", "Gerson"]);
  const [servicos] = useState(["Depilação", "Massagem", "Limpeza de Pele", "Manicure"]);
  const [produtos] = useState(["Hidratante", "Condicionador", "Shampoo"]);
  const [itensVenda, setItensVenda] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [vendasFeitas, setVendasFeitas] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState('');

  const adicionarItem = (tipo, nome) => {
    const preco = tipo === "Serviço" ? 90.87 : 15.45; // Ajuste os preços conforme necessário
    const novoItem = { tipo, nome, quantidade: 1, preco };
    setItensVenda([...itensVenda, novoItem]);
    setPrecoTotal(precoTotal + preco);
  };

  const atualizarQuantidade = (index, quantidade) => {
    const novosItens = [...itensVenda];
    const diferencaPreco = (quantidade - novosItens[index].quantidade) * novosItens[index].preco;
    novosItens[index].quantidade = quantidade;
    setItensVenda(novosItens);
    setPrecoTotal(precoTotal + diferencaPreco);
  };

  const finalizarVenda = () => {
    const novaVenda = {
      cliente: clienteSelecionado,
      itens: itensVenda,
      total: precoTotal
    };
    setVendasFeitas([...vendasFeitas, novaVenda]);
    setItensVenda([]);
    setPrecoTotal(0);
    alert('Venda realizada');
  };

  return (
    <>
      <SideBar />
      <div className='container2'>
        <h4>Processo de Venda</h4>
        <div className='Cadastro'>
          <div className='Select'>
            <Combobox
              placeholder='Cliente'
              data={clientes}
              style={{ width: '50%' }}
              onChange={value => setClienteSelecionado(value)}
            />
            <button className='Botao1'>selecionar</button>
          </div>
          <div className='Select'>
            <Combobox
              placeholder='Serviços'
              data={servicos}
              style={{ width: '50%' }}
              onChange={value => adicionarItem("Serviço", value)}
            />
            <button className='Botao1'>adicionar</button>
          </div>
          <div className='Select'>
            <Combobox
              placeholder='Produtos'
              data={produtos}
              style={{ width: '50%' }}
              onChange={value => adicionarItem("Produto", value)}
            />
            <button className='Botao1'>adicionar</button>
          </div>
        </div>

        <div className='prod'>
          <h5>Produtos/Serviços</h5>

          <table className='Final'>
            <thead>
              <tr>
                <th>Nome do Produto/Serviço</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              {itensVenda.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>
                    <NumberPicker
                      defaultValue={item.quantidade}
                      className='Numero'
                      min={1}
                      onChange={value => atualizarQuantidade(index, value)}
                    />
                  </td>
                  <td>${(item.preco * item.quantidade).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div>
            <h5>Preço Total: ${precoTotal.toFixed(2)}</h5>
          </div>

          <button onClick={finalizarVenda} className='Botao'>Finalizar Venda</button>
        </div>

        <div className='vendasFeitas'>
          <h4>Vendas Feitas</h4>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Itens</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {vendasFeitas.map((venda, index) => (
                <tr key={index}>
                  <td>{venda.cliente}</td>
                  <td>
                    {venda.itens.map((item, idx) => (
                      <div key={idx}>{item.nome} - {item.quantidade} x ${(item.preco * item.quantidade).toFixed(2)}</div>
                    ))}
                  </td>
                  <td>${venda.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Vendas;

