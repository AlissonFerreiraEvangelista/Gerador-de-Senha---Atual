package br.com.geradordesenha.gerador_de_senha;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
@CrossOrigin
public class SenhaController {
    @Autowired
    SenhaRepository senhaRepository;

    @GetMapping(value="/")//read all
    public List<Senha> getListarTodos(){
        List<Senha> lista = senhaRepository.findAll();
        return lista;
    }

  

    @GetMapping(value="/detalhes/{id}")//read one
    public Senha getDetalhes(@PathVariable Long id){
        Senha senha = senhaRepository.findById(id).get();
        return senha;
    }

    @GetMapping(value="/deletar/{id}")//deletar
    public void getDeletar(@PathVariable Long id){
        senhaRepository.deleteById(id);
        
    }

    @PostMapping(value="/cadastro")//update
    public Senha postCadastro(@RequestBody Senha novaSenha){
        Senha senhaSalva = senhaRepository.save(novaSenha);
        return senhaSalva;
    }
}

