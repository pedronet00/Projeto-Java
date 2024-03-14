package br.anapaula.meuprojeto.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.Instrumento;
import br.anapaula.meuprojeto.projetoapi.repository.InstrumentoRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/instrumento")
public class InstrumentoController {
    
    @Autowired
    private InstrumentoRepository repository;

    @PostMapping
    public Instrumento postMethodName(
        @RequestBody Instrumento instrumento) {
        return repository.save(instrumento);
    }
    
    @PutMapping
    public Instrumento alterar(@RequestBody Instrumento entity) {
        repository.save(entity);
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Instrumento> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Instrumento selecionar(@PathVariable int id) {
      return repository.selecionar(id);
    }

    @GetMapping("/contarInstrumentos")
    public int contarInstrumentos(){
        return repository.contarInstrumentos();
    }
}
