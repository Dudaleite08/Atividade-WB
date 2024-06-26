import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, redirect, redirectDocument, useNavigate, useParams } from "react-router-dom";
import Combobox from "react-widgets/Combobox";
import DataPicker from "react-widgets/DatePicker";
import axios from "axios"
import { ICliente, ITelefone } from "./clientes";

interface clienteId {
    id: number
}
interface addTelefone {
    ddd: string
    numero: string
}

function EditarCliente() {
    const [cliente, setCliente] = useState<ICliente>()
    const [ddd, setDDD] = useState<string>('')
    const [telefoneNumero, setTelefoneNumero] = useState<string>('')
    const { id } = useParams()
    const navigate = useNavigate()

    const getClienteId = () => {
        fetch(`http://localhost:32832/cliente/${id}`).then(resp => resp.json())
            .then(data => {
                setCliente(data)
                console.log('cliente')
                console.log(data)
            }).catch(erro => {
                console.log(erro)
            })
    }

    const removeTelefone = (telefoneRemovido, event) => {
        event.preventDefault();

        const index = cliente.telefones.indexOf(telefoneRemovido)

        console.log(index)

        const newTelefones = [...cliente.telefones]

        newTelefones.splice(index, 1)

        console.log(newTelefones)

        setCliente({ ...cliente, telefones: newTelefones })
    }

    const adicionaNumero = () => {
        const newTelefone: ITelefone = {
            id: null,
            ddd: ddd,
            numero: telefoneNumero,
        }


        const novosTelefones = [...cliente.telefones, newTelefone]
        console.log(novosTelefones)
        setCliente({ ...cliente, telefones: novosTelefones })
    }

    const atualizarCliente = () => {
        fetch('http://localhost:32832/cliente/atualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then((resp) => console.log(resp))
        navigate('/clientes')
        window.location.reload();
    }

    useEffect(
        () => getClienteId()
        , []
    )


    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Cadastro de Cliente</h2>
                {cliente && (
                    <div className="row">
                        <Link to={'/clientes'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>

                        <form action="">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input
                                        value={cliente.nome}
                                        placeholder="PlaceHolder"
                                        id="first_name"
                                        type="text"
                                        className="validate"
                                        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}>
                                    </input>
                                    <label className="active">Nome do Cliente</label>
                                </div>
                            </div>


                            <div className="row">
                                <div className="input-field col s10">
                                    <input onChange={(e) => setCliente({ ...cliente, sobreNome: e.target.value })} value={cliente.sobreNome} id="middle_name" type="text" className="validate"></input>
                                    <label className="active" >Sobrenome</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s10">
                                    <input onChange={(e) => setCliente({ ...cliente, email: e.target.value })} value={cliente.email} id="middle_name" type="email" className="validate"></input>
                                    <label className="active" >Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <h5>Endereço</h5>
                                <div>
                                    <div className="input-field col s5">
                                        <input onChange={(e) => setCliente({ ...cliente, endereco: { ...cliente.endereco, estado: e.target.value } })} value={cliente.endereco.estado} className="validate" type="text" id="estado"></input>
                                        <label className="active">Estado</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, cidade: e.target.value } })} value={cliente.endereco.cidade} className="validate" type="text" id="cidade"></input>
                                        <label className="active">Cidade</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, bairro: e.target.value } })} value={cliente.endereco.bairro} className="validate" type="text" id="bairro"></input>
                                        <label className="active">Bairro</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, rua: e.target.value } })} value={cliente.endereco.rua} className="validate" type="text" id="rua"></input>
                                        <label className="active">Rua</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, numero: e.target.value } })} value={cliente.endereco.numero} id="numero" className="validate" type="text"></input>
                                        <label htmlFor="numero" className="active">Número</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value } })} value={cliente.endereco.codigoPostal} className="validate" type="text" id="CEP"></input>
                                        <label className="active">CEP</label>
                                    </div>

                                    <div className="input-field col s5">
                                        <input onChange={e => setCliente({ ...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value } })} value={cliente.endereco.informacoesAdicionais} className="validate" type="text" id="informacoes_adicionais"></input>
                                        <label className="active">Informacoes Adicionais</label>
                                    </div>

                                </div>
                            </div>


                            <h5>Telefones: </h5>
                            {cliente.telefones.map(telefone => {
                                return (
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <input value={telefone.ddd} className="validate" type="text" />
                                            <label className="active">DDD</label>
                                        </div>

                                        <div className="input-field col s5">
                                            <input value={telefone.numero} className="validate" type="text" />
                                            <label className="active">Telefone</label>
                                        </div>

                                        <div className="input-field col s2">
                                            <button onClick={(e) => removeTelefone(telefone, e)} className="btn-small red white-text">Excluir telefone</button>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="row">
                                <h5>Adicionar Telefone</h5>
                                <div className="input-field col s5">
                                    <input onChange={(e) => setDDD(e.target.value)} className="validate" type="text" />
                                    <label className="active">DDD</label>
                                </div>

                                <div className="input-field col s5">
                                    <input onChange={(e) => setTelefoneNumero(e.target.value)} className="validate" type="text" />
                                    <label className="active">Telefone</label>
                                </div>

                                <div className="input-field col s5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            adicionaNumero()
                                            console.log(cliente.telefones)
                                            alert('número adicionado')
                                        }}
                                        className="Botao" >Adicionar numero
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <button onClick={() => {
                                    atualizarCliente()
                                }
                                } className="Botao" type="button" name="action">Atualizar
                                </button>
                            </div>
                        </form>
                    </div >
                )}
            </div >
        </>
    );
}

export default EditarCliente;