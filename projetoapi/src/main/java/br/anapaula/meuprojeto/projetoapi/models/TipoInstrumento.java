package br.anapaula.meuprojeto.projetoapi.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="tipoinstrumento")
public class TipoInstrumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtipoinstrumento;
    private String nomeTipoInstrumento;

    

    
}
