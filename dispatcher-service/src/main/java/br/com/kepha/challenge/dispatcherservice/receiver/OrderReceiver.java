package br.com.kepha.challenge.dispatcherservice.receiver;

import br.com.kepha.challenge.core.model.Order;
import br.com.kepha.challenge.dispatcherservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderReceiver {

	@Autowired
	private OrderService service;

	public void receiveOrder(Order order) {
		System.out.println("Order received: " + order);

		service.dispatchOrder(order);
	}

}
