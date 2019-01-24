package br.com.kepha.challenge.dispatcherservice.service;

import br.com.kepha.challenge.core.model.Order;
import br.com.kepha.challenge.core.model.OrderStatus;
import br.com.kepha.challenge.core.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;

	public void dispatchOrder(Order order) {
		order.setStatus(OrderStatus.SENT);
		repository.save(order);
	}

}
