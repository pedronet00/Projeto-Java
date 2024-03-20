import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

    const FormularioCliente = ({ onClienteSubmit }) => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [emailUsuario, setEmail] = useState('');
    const [senhaUsuario, setSenha] = useState('');
    const [erros, setErros] = useState({ nome: false });
    const tipoUsuario = 1;

    const playSuccessSound = () => {
        const audio = new Audio(`${process.env.PUBLIC_URL}/audio/success.mp3`);
        audio.play();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se o nome está vazio
        if (nome.trim() === '') {
            setErros((prevErros) => ({ ...prevErros, nome: true }));
            Swal.fire({
                title: 'Erro!',
                text: 'O campo nome não pode estar vazio.',
                icon: 'error'
            });
            return;
        }

        try {
            await axios.post('http://localhost:8080/usuario', {
                nome,
                dataNascimento,
                cpf,
                emailUsuario,
                senhaUsuario,
                tipoUsuario
            });
            setNome('');
            setDataNascimento('');
            setCpf('');
            setEmail('');
            setSenha('');

            playSuccessSound();
            Swal.fire({
                title: 'Sucesso!',
                text: 'Funcionário cadastrado com sucesso.',
                icon: 'success'
            });
            document.getElementById("audio").play();
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
    };
    

    return (
        <div>
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="validationCustom01" value={nome} onChange={(e) => setNome(e.target.value)} required />              
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="validationCustom03" value={emailUsuario} onChange={(e) => setEmail(e.target.value)} required />               
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="validationCustom04" value={senhaUsuario} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="validationCustom02" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">CPF</label>
                    <input type="text" className="form-control" id="validationCustomUsername" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioCliente;
