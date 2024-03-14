import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarVendas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vendas/');
                setData(response.data); // Verifique aqui
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table id="datatablesSimple" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>ID Venda</th>
                    <th>Instrumento</th>
                    <th>Marca</th>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Data da Venda</th>
                </tr>
            </thead>
            <tbody>
                {data.map(venda => (
                    <tr key={venda.idvenda}>
                        <td>{venda.idvenda}</td>
                        <td>{venda.idInstrumento.nomeInstrumento}</td>
                        <td>{venda.idInstrumento.idMarca.nomeMarca}</td>
                        <td>{venda.idCliente.nome}</td>
                        <td>{venda.valor}</td>
                        <td>{venda.dataVenda}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarVendas;
