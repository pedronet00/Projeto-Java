package br.anapaula.meuprojeto.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.Cliente;
import br.anapaula.meuprojeto.projetoapi.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "http://localhost:3000") // Permitir solicitações do localhost:3000
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @PutMapping
    public Cliente updateCliente(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable int id) {
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Cliente> getAllClientes() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Cliente getClienteById(@PathVariable int id) {
        return repository.findById(id).orElse(null);
    }
}

