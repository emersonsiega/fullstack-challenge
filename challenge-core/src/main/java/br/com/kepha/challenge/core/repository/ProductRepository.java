package br.com.kepha.challenge.core.repository;

import br.com.kepha.challenge.core.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {

}
