package br.anapaula.meuprojeto.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.Marca;
import br.anapaula.meuprojeto.projetoapi.repository.MarcaRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/marca")
public class MarcaController {
    
    @Autowired
    private MarcaRepository repository;

    @PostMapping
    public Marca postMethodName(
        @RequestBody Marca marca) {
        return repository.save(marca);
    }
    
    @PutMapping
    public Marca alterar(@RequestBody Marca entity) {
        repository.save(entity);
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Marca> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Marca selecionar(@PathVariable int id) {
      return repository.selecionar(id);
    }
}
