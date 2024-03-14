import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarVendas = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vendas');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table id="datatablesSimple" style={{width: '100%'}}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Instrumento</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Ação</th>
                </tr>
            </thead>
            
            <tbody>
                {data && data.map(item => (
                    <tr key={item.id}>
                        <td>{item.idinstrumento}</td>
                        <td>{item.instrumento}</td>
                        <td>{item.valor}</td>
                        <td>{item.dataVenda}</td>
                        <td>Editar</td> {/* Você pode adicionar um link para edição aqui */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarVendas;
