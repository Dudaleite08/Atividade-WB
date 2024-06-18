import { Component } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

function EditarProduto() {
    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Editar Produto</h2>
                <div className="row">
                    <Link to={'/produtos'} className="btn-floating btn-small waves-effect waves-light transparent">
                        <i className="material-icons black-text">arrow_back</i>
                    </Link>
                    <form action="">
                        <div className="row">
                            <div className="input-field col s10">
                                <input id="first_name" type="text" className="validate"></input>
                                <label >Nome do Produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <div className="input-field col s10">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label >Descrição do Produto</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <input id="first_name" type="number" className="validate"></input>
                                <label >Preço do Produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="Botao" type="submit" name="action">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditarProduto;