import { Component, ReactNode, useState, useEffect } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import CadastroCliente from "./cadastrarCliente";
import axios from "axios";
import './Style.css'

export interface ITelefone {
    id: number,
    ddd: string,
    numero: string,
}

export interface IEndereco {
    id: number
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: string
    codigoPostal: string
    informacoesAdicionais: string
    links: any
}

export interface ICliente {
    id: Number
    nome: string
    sobreNome: string
    email: string
    endereco: IEndereco
    telefones: Array<ITelefone>

    links: Array<
        {
            rel: any,
            href: any
        }>
}


function Cliente() {
    const [clientes, setClientes] = useState<ICliente[]>([])

    const getClientes = () => {
        fetch('http://localhost:32832/clientes').then((response) => response.json())
            .then(function (data) {
                setClientes(data)
            })
    }

    const excluirClientes = (id : any) => {
        fetch('http://localhost:32832/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        }).then(() => {
            alert('Cliente excluido com sucesso')
            getClientes()
        })
        .catch( erro => console.log(erro))
    }

    useEffect(() => getClientes(), [])

    console.log(clientes)


    return (
        <>
            <SideBar />
            <div className="container2">

            <h1>Clientes</h1>
            <Link to={'/clientes/cadastro'}><button className="Botao">Cadastrar Cliente</button></Link>

            {clientes.map(cliente => {
                return (
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card panel">

                                <div className="card-content white-text">
                                    <span className="card-title black-text">{cliente.nome}</span>
                                    <p className="black-text">Email : {cliente.email}</p>

                                    <p className="black-text">Telefone: </p>
                                    <ul className="collection">
                                        {cliente.telefones.map((telefone) => (
                                            <li className="black-text collection-item" key={telefone.id}>
                                                ({telefone.ddd})  {telefone.numero}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="black-text">Endereço: </p>
                                    <ul className="collection">
                                        <li className="black-text collection-item">Estado: {cliente.endereco.estado}</li>
                                        <li className="black-text collection-item">Cidade: {cliente.endereco.cidade}</li>
                                        <li className="black-text collection-item">CEP: {cliente.endereco.codigoPostal}</li>
                                        <li className="black-text collection-item">Bairro: {cliente.endereco.bairro}</li>
                                        <li className="black-text collection-item">Rua: {cliente.endereco.rua}</li>
                                        <li className="black-text collection-item">Nº: {cliente.endereco.numero}</li>


                                    </ul>



                                </div>
                                <div className="card-action">
                                    <Link to={`/clientes/editar/${cliente.id}`}><button className="waves-effect waves-light btn-small white-text blue">Editar</button></Link>
                                    <button onClick={() => excluirClientes(cliente.id)} className="waves-effect waves-light btn-small white-text red">Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}
export default Cliente;