import React from 'react';
import { Link } from 'react-router-dom';
import Vendas from '../../pages/vendas';
import './sidebar.css'

const SideBar = () => {
    return (
        <>
            <nav>
                <div className="container1">
                    <a href="/" className="logo">World Beautiful</a>
                    <div className='espaço'></div>
                    <ul id="nav-mobile" className="lista">
                        <li><Link to={'/'}>Venda</Link></li>
                        <li><Link to={'/servicos'}>Serviços</Link></li>
                        <li><Link to={'/produtos'}>Produtos</Link></li>
                        <li><Link to={'/clientes'}>Clientes</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default SideBar;