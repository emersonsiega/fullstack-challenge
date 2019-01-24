package br.com.kepha.challenge.core.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;

import java.math.BigDecimal;

@Data
@RequiredArgsConstructor
public class Product {
	@Id
	private String id;
	@NonNull
	private String name;
	private String description;
	@NonNull
	private BigDecimal price;
	private String imageURL;
}
