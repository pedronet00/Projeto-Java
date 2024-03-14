package br.anapaula.meuprojeto.projetoapi.models;

import java.sql.Date;


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
@Table(name="vendas")
public class Vendas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idvenda;
    
    //Instrumento vendido
    @ManyToOne
    @JoinColumn(name = "idinstrumento")
    private Instrumento idInstrumento;

    //Cliente que comprou
    @ManyToOne
    @JoinColumn(name = "idCliente")
    private Cliente idCliente;

    private float valor;

    private Date dataVenda;

    

    
}
