import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import NavBar from './adm/header/navbar.js'; // Navbar do ADM
import Dashboard from './adm/dashboard.js'; // ADM
import Index from './cliente/index.js'; // Cliente
import Login from './api/Login.js';

// Formularios
import FormularioCliente from './adm/Cliente/novoCliente.js';
import FormularioMarca from './adm/Marca/novaMarca.js';
import FormularioTipoInstrumento from './adm/TipoInstrumento/novoTipoInstrumento.js';
import FormularioNovoInstrumento from './adm/Instrumento/novoInstrumento.js';

// Listagem
import ListarClientes from './api/Cliente/listarClientes.js';
import ListarMarcas from './api/Marca/listarMarcas.js';
import ListarInstrumentos from './api/Instrumento/listarInstrumentos.js';
import ListarTipoInstrumento from './api/TipoInstrumento/listarTipoInstrumento.js';

// Função de autenticação
const isAuthenticated = () => {
  // Implemente a lógica de autenticação aqui
  // Retorne true se o usuário estiver autenticado, false caso contrário
  const user = localStorage.getItem('user');
  return !!user; // Exemplo simples: verifica se há um usuário na localStorage
};

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/*" 
          element={
            <>
              <Routes>
                <Route exact path="/" element={<Index/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
              </Routes>
            </>
          } 
        />

        <Route
          path="/sistemaadm/*"
          element={isAuthenticated() ? (
            <>
              <NavBar />
              <Routes>
                <Route exact path='/' element={<Dashboard/>}></Route>
                <Route exact path='/listarClientes' element={<ListarClientes/>}></Route>
                <Route exact path='/novoCliente' element={<FormularioCliente/>}></Route>
                <Route exact path='/listarMarcas' element={<ListarMarcas/>}></Route>
                <Route exact path='/novaMarca' element={<FormularioMarca/>}></Route>
                <Route exact path='/novoTipoInstrumento' element={<FormularioTipoInstrumento/>}></Route>
                <Route exact path='/listarInstrumentos' element={<ListarInstrumentos/>}></Route>
                <Route exact path='/listarTipos' element={<ListarTipoInstrumento/>}></Route>
                <Route exact path='/novoInstrumento' element={<FormularioNovoInstrumento/>}></Route>
              </Routes>
            </>
          ) : (
            <Navigate to="/login" />
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
