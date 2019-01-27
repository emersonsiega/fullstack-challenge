package br.com.kepha.challenge.dispatcherservice.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoDBConfig extends AbstractMongoClientConfiguration {

	@Override
	protected String getDatabaseName() {
		return "sales-service";
	}

	@Override
	public MongoClient mongoClient() {
		return MongoClients.create("mongodb://admin:Admin777@ds123400.mlab.com:23400/sales-service");
	}
}
