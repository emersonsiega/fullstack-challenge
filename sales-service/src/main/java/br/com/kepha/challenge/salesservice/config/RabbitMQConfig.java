package br.com.kepha.challenge.salesservice.config;

import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

	public static final String EXCHANGE_NAME = "order-exchange";
	public static final String ROUTING_KEY = "br.com.kepha.order.dispatcher";
	public static final String DELAY_CONFIG = "x-delay";
	public static final int DELAY_TIME_MS = 30000;


	@Bean
	public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
		RabbitTemplate template = new RabbitTemplate(connectionFactory);
		return template;
	}

}
