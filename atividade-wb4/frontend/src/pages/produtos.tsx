import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import  EditarServico  from "./editarServico";

function TelaProduto() {
    return (
        <>
            <SideBar />
            <div className="container2">
            <main>
                <h1>Produtos</h1>
                    <Link to={'/produtos/cadastro'} className=""><button className="Botao4">Adicionar Produto</button></Link>
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
                            <tr>
                                <td>Shampoo</td>
                                <td>Shampoo Anti-queda</td>
                                <td>$80.25</td>
                                <td>0</td>
                                <td>$0.00</td>
                            <td>
                                <Link to={'/produtos/editar'}>
                                    <button className="Botao3">Editar</button>
                                </Link>
                                <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Mascara de cílios</td>
                            <td>Mascara de Cílios com efeito de volume</td>
                            <td>$80.25</td>
                            <td>0</td>
                            <td>$0.00</td>
                            <td>
                                <Link to={'/produtos/editar'}>
                                    <button className="Botao3">Editar</button>
                                </Link>
                                <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Esmalte</td>
                            <td>Esmalte em gel</td>
                            <td>$80.25</td>
                            <td>0</td>
                            <td>$0.00</td>
                            <td>
                                <Link to={'/produtos/editar'}>
                                    <button className="Botao3">Editar</button>
                                </Link>
                                <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Condicionador</td>
                            <td>Condicionador Hidratante</td>
                            <td>$80.25</td>
                            <td>0</td>
                            <td>$0.00</td>
                            <td>
                                <Link to={'/produtos/editar'}>
                                    <button className="Botao3">Editar</button>
                                </Link>
                                <button className="Botao3">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
        </>
    );
}

export default TelaProduto;