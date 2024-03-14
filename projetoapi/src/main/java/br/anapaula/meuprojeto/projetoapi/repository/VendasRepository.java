package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.anapaula.meuprojeto.projetoapi.models.Vendas;

public interface VendasRepository extends CrudRepository<Vendas, Integer> {
   
    @Query(value = "SELECT * FROM vendas WHERE idvenda = ?1", nativeQuery = true)
    Vendas selecionar(int id);

    @Query(value = "SELECT * FROM vendas LEFT JOIN instrumento ON vendas.idinstrumento = instrumento.id LEFT JOIN cliente ON vendas.id_cliente = cliente.id", nativeQuery = true)
    Vendas selecionarTudo();

    @Query(value = "SELECT NULL as idvenda, NULL as data_venda, SUM(valor) as soma FROM vendas", nativeQuery = true)
    Vendas valorGanho();


}
