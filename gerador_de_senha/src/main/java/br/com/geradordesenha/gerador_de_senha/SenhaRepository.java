package br.com.geradordesenha.gerador_de_senha;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface SenhaRepository extends CrudRepository<Senha, Long> {
    List<Senha> findAll();
}
