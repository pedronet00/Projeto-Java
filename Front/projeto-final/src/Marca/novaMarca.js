import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormularioMarca = ({ onClienteSubmit }) => {
    const [nomeMarca, setNome] = useState('');
    const [erros, setErros] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se o nome está vazio
        if (nomeMarca.trim() === '') {
            setErros((prevErros) => ({ ...prevErros, nomeMarca: true }));
            Swal.fire({
                title: 'Erro!',
                text: 'O campo nome não pode estar vazio.',
                icon: 'error'
            });
            return;
        }

        try {
            await axios.post('http://localhost:8080/marca', {nomeMarca});
            setNome('');
            Swal.fire({
                title: 'Sucesso!',
                text: 'Marca cadastrada com sucesso.',
                icon: 'success'
            });
        } catch (error) {
            console.error('Erro ao cadastrar marca:', error);
            alert('Erro ao cadastrar marca. Por favor, tente novamente.');
        }
    };
    

    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Nome da Marca</label>
                <input type="text" className="form-control" id="validationCustom01" value={nomeMarca} onChange={(e) => setNome(e.target.value)} required />              
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Salvar</button>
            </div>
        </form>
    );
};

export default FormularioMarca;
