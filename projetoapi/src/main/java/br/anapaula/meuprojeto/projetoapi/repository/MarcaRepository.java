package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.Marca;

public interface MarcaRepository extends CrudRepository<Marca, Integer> {
   
    @Query(value = "SELECT * FROM marca WHERE idmarca = ?1", nativeQuery = true)
    Marca selecionar(int id);

}
