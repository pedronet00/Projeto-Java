package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.Vendas;

public interface VendasRepository extends CrudRepository<Vendas, Integer> {
   
    @Query(value = "SELECT * FROM vendas WHERE idvenda = ?1", nativeQuery = true)
    Vendas selecionar(int id);

}
