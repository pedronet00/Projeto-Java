import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarTipoInstrumento = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/tipoinstrumento');
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
                    <th>Tipo do Instrumento</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{item. nomeTipoInstrumento}</p>
                                    </div>
                                </div>
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

export default ListarTipoInstrumento;
