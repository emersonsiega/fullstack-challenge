package br.com.kepha.challenge.salesservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
	@Id
	private String product_id;
	private BigDecimal price;
	private int quantity;
}
