package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.TipoInstrumento;

public interface TipoInstrumentoRepository extends CrudRepository<TipoInstrumento, Integer> {
   
    @Query(value = "SELECT * FROM tipoinstrumento WHERE idtipoinstrumento = ?1", nativeQuery = true)
    TipoInstrumento selecionar(int id);

    
}
