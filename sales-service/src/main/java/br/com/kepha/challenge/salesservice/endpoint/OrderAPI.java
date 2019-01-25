package br.com.kepha.challenge.salesservice.endpoint;

import br.com.kepha.challenge.core.model.Order;
import br.com.kepha.challenge.salesservice.config.RestConfig;
import br.com.kepha.challenge.salesservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderAPI implements RestConfig {

	@Autowired
	private OrderService service;

	@RequestMapping
	public List<Order> findAll() {
		return service.findAll();
	}

	@RequestMapping("/{id}")
	public Order findById(@PathVariable("id") String id) {
		return service.findById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public void save(@RequestBody Order order) {
		service.save(order);
	}
}


