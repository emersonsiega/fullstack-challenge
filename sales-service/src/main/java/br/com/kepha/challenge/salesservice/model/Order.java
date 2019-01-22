package br.com.kepha.challenge.salesservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class Order {
	@Id
	private String id;
	@NonNull
	private BigDecimal total;
	private OrderStatus status = OrderStatus.WAITING;
	@NonNull
	private LocalDateTime dateTime;
	@NonNull
	private List<OrderItem> items;
}
