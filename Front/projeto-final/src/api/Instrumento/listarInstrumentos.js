import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarInstrumentos = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/instrumento');
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
                    <th>Instrumento</th>
                    <th>Descrição instrumento</th>
                    <th>Valor</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{item.nomeInstrumento}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{item.descricaoInstrumento}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{item.valorInstrumento}</p>
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

export default ListarInstrumentos;
