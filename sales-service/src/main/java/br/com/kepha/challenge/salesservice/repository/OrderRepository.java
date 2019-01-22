package br.com.kepha.challenge.salesservice.repository;

import br.com.kepha.challenge.salesservice.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
