package br.com.kepha.challenge.salesservice.repository;

import br.com.kepha.challenge.salesservice.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {

}
