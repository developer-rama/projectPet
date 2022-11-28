import React from "react";
import { Link } from "react-router-dom"
import img from "../assets/img/doguito.svg"
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer-icone">
                </span>
            </div>
            <div className="cabecalho-container">
                <Link to="/home" className="flex flex--centro">
                    <img className="cabecalho__logo" src={img} alt="Logo Doguito" />
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </Link>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link to="#" className="menu menu-item--entrar">Entrar</Link></li>
                    <li><Link to="#" className="menu-item">Produtos</Link></li>
                    <li><Link to="/blog" className="menu-item">Blog</Link></li>
                    <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu menu-cabecalho-background"></div>
        </header>
    )
}

export default Cabecalho;