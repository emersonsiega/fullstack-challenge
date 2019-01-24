package br.com.kepha.challenge.salesservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = "br.com.kepha.challenge")
@EnableMongoRepositories(basePackages = "br.com.kepha.challenge")
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

}
