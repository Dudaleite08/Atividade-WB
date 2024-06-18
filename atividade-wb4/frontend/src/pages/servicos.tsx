import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

function TelaServico() {
    return (
        <>
            <SideBar />
            <div className='container2'>
            <h1>Serviços</h1>
                <Link to={'/servicos/cadastro'} className="link"><button className="Botao4">Adicionar Serviço</button></Link>

                <table>
                    <thead>
                        <tr className="tabela1">
                            <th>Name</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Quantidade vendida</th>
                            <th>Valor total em vendas</th>
                            <th>Opções</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Depilaçao</td>
                            <td>Depilação na cera</td>
                            <td>$80.25</td>
                            <td>0</td>
                            <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button className="Botao3">Editar</button>
                            </Link>
                            <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Manicure</td>
                        <td>Nail design</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button className="Botao3">Editar</button>
                            </Link>
                            <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Limpeza de pele</td>
                        <td>Retira cravos</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button className="Botao3">Editar</button>
                            </Link>
                            <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Pintura de Cabelo</td>
                        <td>pintura e hidtratação</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button className="Botao3">Editar</button>
                            </Link>
                            <button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}

export default TelaServico;