package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.Instrumento;

public interface InstrumentoRepository extends CrudRepository<Instrumento, Integer> {
   
    @Query(value = "SELECT * FROM instrumento WHERE id = ?1", nativeQuery = true)
    Instrumento selecionar(int id);

    
    
}
