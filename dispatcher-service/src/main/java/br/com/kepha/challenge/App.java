package br.com.kepha.challenge;

import br.com.kepha.challenge.dispatcherservice.receiver.OrderReceiver;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = "br.com.kepha.challenge")
@EnableMongoRepositories(basePackages = "br.com.kepha.challenge")
public class App {
	static final String exchangeName = "order-exchange";
	static final String queueName = "order-queue";

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Bean
	Queue queue() {
		return new Queue(queueName, false);
	}

	@Bean
	TopicExchange exchange() {
		return new TopicExchange(exchangeName);
	}

	@Bean
	Binding binding(Queue queue, TopicExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with("br.com.kepha.order.#");
	}

	@Bean
	SimpleMessageListenerContainer container(ConnectionFactory factory, MessageListenerAdapter adapter) {
		SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
		container.setConnectionFactory(factory);
		container.setQueueNames(queueName);
		container.setMessageListener(adapter);

		return container;
	}

	@Bean
	MessageListenerAdapter listenerAdapter(OrderReceiver receiver) {
		return new MessageListenerAdapter(receiver, "receiveOrder");
	}
}
