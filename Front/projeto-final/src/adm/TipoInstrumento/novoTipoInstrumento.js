import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormularioTipoInstrumento = ({ onClienteSubmit }) => {
    const [nomeTipoInstrumento, setNome] = useState('');
    const [erros, setErros] = useState('');

    const playSuccessSound = () => {
        const audio = new Audio(`${process.env.PUBLIC_URL}/audio/success.mp3`);
        audio.play();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se o nome está vazio
        if (nomeTipoInstrumento.trim() === '') {
            setErros((prevErros) => ({ ...prevErros, nomeTipoInstrumento: true }));
            Swal.fire({
                title: 'Erro!',
                text: 'O nome não pode estar vazio.',
                icon: 'error'
            });
            return;
        }

        try {
            await axios.post('http://localhost:8080/tipoinstrumento', {nomeTipoInstrumento});
            setNome('');

            playSuccessSound();
            Swal.fire({
                title: 'Sucesso!',
                text: 'Tipo de instrumento cadastrado com sucesso.',
                icon: 'success'
            });
        } catch (error) {
            console.error('Erro ao cadastrar tipo de instrumento:', error);
            alert('Erro ao cadastrar tipo de instrumento. Por favor, tente novamente.');
        }
    };
    

    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Tipo do instrumento</label>
                <input type="text" className="form-control" id="validationCustom01" value={nomeTipoInstrumento} onChange={(e) => setNome(e.target.value)} required />              
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Salvar</button>
            </div>
        </form>
    );
};

export default FormularioTipoInstrumento;
