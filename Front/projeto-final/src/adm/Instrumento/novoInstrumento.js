import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormularioNovoInstrumento = ({ onClienteSubmit }) => {
    const [nomeInstrumento, setNomeInstrumento] = useState('');
    const [descricaoInstrumento, setDescricao] = useState('');
    const [valorInstrumento, setValor] = useState('');
    const [erros, setErros] = useState({ nome: false });
    const [tiposInstrumento, setTiposInstrumento] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [idTipoInstrumento, setIdTipoInstrumento] = useState('');
    const [idMarca, setIdMarca] = useState('');

    const playSuccessSound = () => {
        const audio = new Audio(`${process.env.PUBLIC_URL}/audio/success.mp3`);
        audio.play();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseTipos = await axios.get('http://localhost:8080/tipoinstrumento');
                const responseMarcas = await axios.get('http://localhost:8080/marca');

                setTiposInstrumento(responseTipos.data);
                setMarcas(responseMarcas.data);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (nomeInstrumento.trim() === '') {
            setErros((prevErros) => ({ ...prevErros, nome: true }));
            Swal.fire({
                title: 'Erro!',
                text: 'O campo nome do instrumento não pode estar vazio.',
                icon: 'error'
            });
            return;
        }

        try {
            await axios.post('http://localhost:8080/instrumento', {
                nomeInstrumento,
                descricaoInstrumento,
                valorInstrumento,
                idMarca,
                idTipoInstrumento
            });

            setNomeInstrumento('');
            setDescricao('');
            setValor('');
            setIdMarca('');
            setIdTipoInstrumento('');
            
            playSuccessSound();
            Swal.fire({
                title: 'Sucesso!',
                text: 'Instrumento cadastrado com sucesso.',
                icon: 'success'
            });
            
        } catch (error) {
            console.error('Erro ao cadastrar instrumento:', error);
            alert('Erro ao cadastrar instrumento. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Nome do Instrumento</label>
                    <input type="text" className="form-control" id="validationCustom01" value={nomeInstrumento} onChange={(e) => setNomeInstrumento(e.target.value)} required />
                    {erros.nome && <p className="text-danger">O campo nome do instrumento não pode estar vazio.</p>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="validationCustom03" value={descricaoInstrumento} onChange={(e) => setDescricao(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Valor</label>
                    <input type="text" className="form-control" id="validationCustom04" value={valorInstrumento} onChange={(e) => setValor(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Marca</label>
                    <select className="form-control" id="validationCustomUsername" value={idMarca} onChange={(e) => setIdMarca(e.target.value)} required>
                        <option value="">Selecione uma marca</option>
                        {marcas.map((marca, index) => (
                            <option key={index} value={marca.id}>{marca.nomeMarca}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Tipo do Instrumento</label>
                    <select className="form-control" id="validationCustomUsername" value={idTipoInstrumento} onChange={(e) => setIdTipoInstrumento(e.target.value)} required>
                        <option value="">Selecione um tipo de instrumento</option>
                        {tiposInstrumento.map((tipo, index) => (
                            <option key={index} value={tipo.id}>{tipo.nomeTipoInstrumento}</option>
                        ))}
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioNovoInstrumento;
