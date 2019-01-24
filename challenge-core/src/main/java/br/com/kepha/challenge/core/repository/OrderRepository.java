package br.com.kepha.challenge.core.repository;

import br.com.kepha.challenge.core.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
