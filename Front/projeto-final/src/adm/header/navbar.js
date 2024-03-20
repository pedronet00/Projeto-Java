import React from 'react';
import { Dropdown, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown });

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#1b1b39'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/sistemaadm" style={{color: 'white'}}><img src='../../img/logo.png' style={{width: '70px'}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{color: 'white'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Clientes
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/sistemaadm/listarClientes">Listar Clientes</a></li>
                                <li><a className="dropdown-item" href="/sistemaadm/novoCliente">Novo Cliente</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{color: 'white'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Instrumentos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/sistemaadm/listarInstrumentos">Listar Instrumentos</a></li>
                                <li><a className="dropdown-item" href="/sistemaadm/novoInstrumento">Novo Instrumento</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{color: 'white'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/sistemaadm/listarMarcas">Listar Marcas</a></li>
                                <li><a className="dropdown-item" href="/sistemaadm/novaMarca">Nova Marca</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{color: 'white'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tipo de Instrumento
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/sistemaadm/listarTipos">Listar Tipos</a></li>
                                <li><a className="dropdown-item" href="/sistemaadm/novoTipoInstrumento">Novo Tipo</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" style={{marginRight: '10%'}}>
                        <input className="form-control me-2" type="search" placeholder="'Instrumentos', 'Vendas'..." aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                    </form>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                            data-mdb-dropdown-init
                            className="nav-link dropdown-toggle d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false"
                            style={{color: 'white'}}
                            >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                className="rounded-circle"
                                height="22"
                                alt="Portrait of a Woman"
                                loading="lazy"
                                style={{width: "50px", height: "auto"}}
                            />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
