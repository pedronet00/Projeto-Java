import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/usuario/login', { email, senha });
            const userData = response.data;

            setTipoUsuario(userData.tipoUsuario);

            // Armazenar usuário no localStorage
            localStorage.setItem('user', JSON.stringify(userData));
            
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Usuário ou senha inválidos.',
                icon: 'error'
            });
            setEmail('');
            setPassword('');
            console.error('Erro ao fazer login:', error);
        }
    };

    
    console.log("tipo usuario: " + tipoUsuario)

    if (tipoUsuario === 1) {
        return <Navigate to="/sistemaadm" />;
    } else if (tipoUsuario === 2) { 
        return <Navigate to="/" />;
    } else{
        console.log("nenhum")
    }

    return (
        <div>
            <section className="background-radial-gradient overflow-hidden" style={{ backgroundColor: "#1b1b39", height: "100vh" }}>
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                                A melhor loja <br />
                                <span>de instrumentos!</span>
                            </h1>
                            <p className="mb-4 opacity-70 text-light">
                                A Music4Life atua há mais de 20 anos realizando o sonho de possuir um instrumento de qualidade por um preço justo. Somos os líderes do mercado de instrumentos da América Latina, e queremos o mundo!
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-outline mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1">E-mail</label>
                                                    <input type="email" id="form3Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Senha</label>
                                            <input type="password" id="form3Example4" className="form-control" value={senha} onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <button type="submit" className="btn btn-block mb-4" style={{ backgroundColor: "#1b1b39", color: "white" }}>
                                            Entrar
                                        </button>

                                        <div className="text-center">
                                            <p>Não possui uma conta? <a href="#">Registre-se</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
