package br.com.kepha.challenge.salesservice.service;

import br.com.kepha.challenge.salesservice.model.Order;
import br.com.kepha.challenge.salesservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
	@Autowired
	private OrderRepository repository;

	public List<Order> findAll() {
		return repository.findAll(new Sort(Sort.Direction.DESC, "dateTime"));
	}

	public void save(Order order) {
		repository.save(order);
		//TODO: Send to processing via JMS
	}

	public Order findById(String id) {
		return repository.findById(id).get();
	}

}
