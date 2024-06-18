import { Component } from 'react'
import SideBar from '../components/sidebar/sidebar'
import Combobox from "react-widgets/Combobox"
import NumberPicker from 'react-widgets/NumberPicker'
import './Style.css'


export class Vendas extends Component {


    render() {
        return (
            <>
                <SideBar />
                <div className='container2'>
                    <h4>Processo de Venda</h4>
                    <div className='Cadastro'>
                        <div className='Select'>
                            <Combobox
                                placeholder='Cliente'
                                data={["Maria", "Jaqueline", "Nicolas", "Gerson"]}
                                style={{width:'50%'}}
        
                            />
                            <button className='Botao1'>selecionar</button>
                        </div>
                        <div className='Select'>
                            <Combobox
                                placeholder='Serviços'
                                data={["Depilaçao", "Massagem", "Limpeza de Pele", "Manicure"]}
                                style={{width:'50%'}}
                            />
                            <button className='Botao1'>adicionar</button>
                        </div>
                        <div className='Select'>
                            <Combobox
                                placeholder='Produtos'
                                data={["Hidratante", "Condicionador", "Shampoo", ""]}
                                style={{width:'50%'}}
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

                            <tbody >
                                <tr>
                                    <td>Massagem</td>
                                    <td ><NumberPicker defaultValue={1} className='Numero' /></td>
                                    <td>$90.87</td>
                                </tr>
                                <tr>
                                    <td>Creme de Barbear</td>
                                    <td><NumberPicker defaultValue={1} className='Numero' /></td>
                                    <td>$15.45</td>
                                </tr>
                                <tr>
                                    <td>Shampoo</td>
                                    <td><NumberPicker defaultValue={1} className='Numero'  /></td>
                                    <td>$8.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <div>
                            <h5>Preço Total: xxxx,xx</h5>
                        </div>

                        <button onClick={() => alert('Venda realizaada')} className='Botao'>Finalizar Venda</button>
                    </div>

                </div>
            </>
        )
    }
}