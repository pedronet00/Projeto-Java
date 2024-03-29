import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarClientes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/usuario');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                <th>Usuário</th>
                <th>Data de nascimento</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: '45px', height: '45px' }}
                                    className="rounded-circle"
                                    />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">{item.nome}</p>
                                    <p className="text-muted mb-0">{item.email}</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{item.dataNascimento}</p>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-rounded"><i className="fa-solid fa-pen-to-square"></i>&nbsp;Editar</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Carregando...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ListarClientes;
