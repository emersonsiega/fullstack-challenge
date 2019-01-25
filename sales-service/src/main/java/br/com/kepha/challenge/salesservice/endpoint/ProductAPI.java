package br.com.kepha.challenge.salesservice.endpoint;

import br.com.kepha.challenge.core.model.Product;
import br.com.kepha.challenge.salesservice.config.RestConfig;
import br.com.kepha.challenge.salesservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductAPI implements RestConfig {

	@Autowired
	private ProductService service;

	@RequestMapping
	public List<Product> findAll() {
		return service.findAll();
	}


}
