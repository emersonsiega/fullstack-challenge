package br.com.kepha.challenge.salesservice.service;

import br.com.kepha.challenge.core.model.Order;
import br.com.kepha.challenge.salesservice.config.RabbitMQConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageBuilder;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.utils.SerializationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDispatcherService {
	private static final Logger LOGGER = LoggerFactory.getLogger(OrderDispatcherService.class);

	@Autowired
	private RabbitTemplate template;

	private void sendWithDelay(Order order) {
		MessageProperties properties = new MessageProperties();
		properties.setHeader(RabbitMQConfig.DELAY_CONFIG, RabbitMQConfig.DELAY_TIME_MS);

		Message message = MessageBuilder
				.withBody(SerializationUtils.serialize(order))
				.andProperties(properties)
				.build();

		template.send(
				RabbitMQConfig.EXCHANGE_NAME,
				RabbitMQConfig.ROUTING_KEY,
				message);
	}

	public void sendOrder(Order order) {
		LOGGER.info("Sending order to dispatcher queue: " + order);

		sendWithDelay(order);
	}

}
