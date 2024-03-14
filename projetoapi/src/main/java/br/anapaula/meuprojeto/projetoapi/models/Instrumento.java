package br.anapaula.meuprojeto.projetoapi.models;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="instrumento")
public class Instrumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nomeInstrumento;
    private String descricaoInstrumento;
    private double valorInstrumento;

    @JsonDeserialize
    @ManyToOne
    @JoinColumn(name = "idmarca")
    private Marca idMarca;

    @JsonDeserialize
    @ManyToOne
    @JoinColumn(name = "idtipoinstrumento")
    private TipoInstrumento idTipoInstrumento;

    
}
