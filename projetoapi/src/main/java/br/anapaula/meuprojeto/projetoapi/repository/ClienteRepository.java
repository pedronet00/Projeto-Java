package br.anapaula.meuprojeto.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.anapaula.meuprojeto.projetoapi.models.Cliente;

public interface ClienteRepository 
    extends CrudRepository<Cliente, Integer>{
   
@Query(value = "select * from cliente where id=?1", 
        nativeQuery = true)
    Cliente selecionar(int id);

}
