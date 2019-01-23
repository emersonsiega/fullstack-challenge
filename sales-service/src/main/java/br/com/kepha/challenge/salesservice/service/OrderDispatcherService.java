package br.com.kepha.challenge.salesservice.service;

import br.com.kepha.challenge.salesservice.config.RabbitMQConfig;
import br.com.kepha.challenge.salesservice.model.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDispatcherService {

	@Autowired
	private RabbitTemplate template;

	private static final Logger LOGGER = LoggerFactory.getLogger(OrderDispatcherService.class);

	public void sendOrder(Order order) {
		LOGGER.info("Sending order ", order.getId());

		template.convertAndSend(RabbitMQConfig.EXCHANGE_NAME,
				RabbitMQConfig.ROUTING_KEY, order.getId());
	}

}
