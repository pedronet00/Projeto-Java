import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './header/navbar.js';
import ListarClientes from './api/Cliente/listarClientes.js';
import FormularioCliente from './Cliente/novoCliente.js';
import FormularioMarca from './Marca/novaMarca.js';
import ListarMarcas from './api/Marca/listarMarcas.js';
import FormularioTipoInstrumento from './TipoInstrumento/novoTipoInstrumento.js';
import Dashboard from './dashboard.js';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/listarClientes' element={<ListarClientes/>}></Route>
          <Route exact path='/novoCliente' element={<FormularioCliente/>}></Route>
          <Route exact path='/listarMarcas' element={<ListarMarcas/>}></Route>
          <Route exact path='/novaMarca' element={<FormularioMarca/>}></Route>
          <Route exact path='/novoTipoInstrumento' element={<FormularioTipoInstrumento/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
