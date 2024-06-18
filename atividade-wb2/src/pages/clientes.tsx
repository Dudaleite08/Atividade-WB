import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

export class Cliente extends Component {

    render() {
        return (
            <>
                <SideBar />
                <div className="container2">
                <h1>Clientes</h1>

                <Link to={'/clientes/cadastro'} ><button className='Botao4'>Cadastrar Cliente</button></Link>
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
                        <tr>
                            <td>Maria Eduarda Peleteiro Leite</td>
                            <td>111.211.111-11</td>
                            <td>Feminino</td>
                            <td>08/04/2004</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td><Link to={'/clientes/Editar'}><button className="Botao3">Editar</button></Link><button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button></td>
                        </tr>

                        <tr>
                            <td>Nicolas Augusto Santiago</td>
                            <td>333.333.333-33</td>
                            <td>Masculino</td>
                            <td>23/08/2000</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td><Link to={'/clientes/Editar'}><button className="Botao3">Editar</button></Link><button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button></td>
                        </tr>

                        <tr>
                            <td>Raianny Marcela</td>
                            <td>444.444.444-44</td>
                            <td>Feminino</td>
                            <td>10/05/1998</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td><Link to={'/clientes/Editar'}><button className="Botao3">Editar</button></Link><button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button></td>
                        </tr>

                        <tr>
                            <td>Ricardo Soares</td>
                            <td>555.555.555-55</td>
                            <td>Masculino</td>
                            <td>06/12/1977</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td><Link to={'/clientes/Editar'}><button className="Botao3">Editar</button></Link><button className="Botao3" onClick={() => alert('Deletado com sucesso')}>Deletar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            </>
        )
    }
}
