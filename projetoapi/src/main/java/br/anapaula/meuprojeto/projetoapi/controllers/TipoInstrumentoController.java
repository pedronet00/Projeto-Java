package br.anapaula.meuprojeto.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.TipoInstrumento;
import br.anapaula.meuprojeto.projetoapi.repository.TipoInstrumentoRepository;

@RequestMapping("/tipoinstrumento")
@RestController
public class TipoInstrumentoController {
    @Autowired
    private TipoInstrumentoRepository repository;

    @PostMapping
    public TipoInstrumento postMethodName(
        @RequestBody TipoInstrumento tipoinstrumento) {
        return repository.save(tipoinstrumento);
    }

    @PutMapping
    public TipoInstrumento alterar(@RequestBody TipoInstrumento entity) {
        repository.save(entity);
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<TipoInstrumento> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public TipoInstrumento selecionar(@PathVariable int id) {
      return repository.selecionar(id);
    }
}
