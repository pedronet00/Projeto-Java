import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarClientes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cliente');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.nome}</li>
                    ))}
                </ul>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ListarClientes;
