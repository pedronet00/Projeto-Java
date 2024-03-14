import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



const FormularioCliente = ({ onClienteSubmit }) => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/cliente', { nome, dataNascimento, cpf, email, senha});
            // Limpar os campos do formulário após o envio
            setNome('');
            setDataNascimento('');
            setCpf('');
            setEmail('');
            setSenha('');
            Swal.fire({
                title: "Sucesso!",
                text: "Cliente cadastrado com sucesso.",
                icon: "success"
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
    };

    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Nome</label>
                <input type="text" className="form-control" id="validationCustom01" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <div className="valid-feedback">
                    Parece bom!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="validationCustom03" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div className="valid-feedback">
                    Parece bom!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Senha</label>
                <input type="password" className="form-control" id="validationCustom04" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <div className="valid-feedback">
                    Parece bom!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Data de Nascimento</label>
                <input type="date" className="form-control" id="validationCustom02" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                <div className="valid-feedback">
                    Parece bom!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">CPF</label>
                <input type="text" className="form-control" id="validationCustomUsername" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                <div className="invalid-feedback">
                    Por favor, insira um CPF válido.
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    );
};

export default FormularioCliente;
