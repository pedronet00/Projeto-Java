package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    @Query(value = "SELECT * FROM usuarios WHERE id_usuario = ?1", nativeQuery = true)
    Usuario selecionar(int id);

    @Query(value = "SELECT * FROM usuarios WHERE email_usuario = ?1 AND senha_usuario = ?2", nativeQuery = true)
    Usuario selecionarLogin(String email, String senha);
}
