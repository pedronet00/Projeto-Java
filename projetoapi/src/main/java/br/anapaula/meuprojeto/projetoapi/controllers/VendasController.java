package br.anapaula.meuprojeto.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.Vendas;
import br.anapaula.meuprojeto.projetoapi.repository.VendasRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/vendas")
public class VendasController {
    
    @Autowired
    private VendasRepository repository;

    @PostMapping
    public Vendas postMethodName(
        @RequestBody Vendas venda) {
        return repository.save(venda);
    }

    @PutMapping
    public Vendas alterar(@RequestBody Vendas entity) {
        repository.save(entity);
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Vendas> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Vendas selecionar(@PathVariable int id) {
      return repository.selecionar(id);
    }

    @GetMapping("/selecionarTudo/{id}")
    public Vendas selecionarTudo(@PathVariable int id) {
      return repository.selecionarTudo(id);
    }
}
