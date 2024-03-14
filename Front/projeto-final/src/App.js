import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './header/navbar.js';
import ListarClientes from './api/Cliente/listarClientes.js';
import FormularioCliente from './Cliente/novoCliente.js';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/listarClientes' element={<ListarClientes/>}></Route>
          <Route exact path='/novoCliente' element={<FormularioCliente/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
