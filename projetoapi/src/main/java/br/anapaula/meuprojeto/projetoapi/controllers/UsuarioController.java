package br.anapaula.meuprojeto.projetoapi.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.anapaula.meuprojeto.projetoapi.models.Usuario;
import br.anapaula.meuprojeto.projetoapi.repository.UsuarioRepository;

@RequestMapping("/usuario")
@RestController
public class UsuarioController {
    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public Usuario postMethodName(
        @RequestBody Usuario usuario) {
        return repository.save(usuario);
    }

    @PutMapping
    public Usuario alterar(@RequestBody Usuario entity) {
        repository.save(entity);
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Usuario> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Usuario selecionar(@PathVariable int id) {
      return repository.selecionar(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> fazerLogin(@RequestBody Map<String, String> credenciais) {
        String email = credenciais.get("email");
        String senha = credenciais.get("senha");

        Usuario usuario = repository.selecionarLogin(email, senha);
        
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            // Se as credenciais estiverem incorretas, retorne uma resposta de erro
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }
}
