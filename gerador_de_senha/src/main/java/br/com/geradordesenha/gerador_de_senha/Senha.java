
package br.com.geradordesenha.gerador_de_senha;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
    public class Senha {
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)

        Long id;
        String login;
        String nomeAplicativo;
        String senha;
        String url;

        
        
    }
