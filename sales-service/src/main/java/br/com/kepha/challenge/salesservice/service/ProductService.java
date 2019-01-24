package br.com.kepha.challenge.salesservice.service;

import br.com.kepha.challenge.core.model.Product;
import br.com.kepha.challenge.core.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	public List<Product> findAll() {
		return repository.findAll();
	}
}
