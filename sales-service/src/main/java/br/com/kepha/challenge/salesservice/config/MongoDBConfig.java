package br.com.kepha.challenge.salesservice.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoDBConfig extends AbstractMongoClientConfiguration {

	@Value("${mongodb.uri}")
	private String mongodbURI;

	@Override
	protected String getDatabaseName() {
		return "sales-service";
	}

	@Override
	public MongoClient mongoClient() {
		return MongoClients.create(mongodbURI);
	}
}
