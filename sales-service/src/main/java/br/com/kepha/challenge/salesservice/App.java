package br.com.kepha.challenge.salesservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class App implements CommandLineRunner {
//    @Autowired
//    private OrderRepository orderRepository;
//    @Autowired
//    private ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//        orderRepository.deleteAll();

//        System.out.println("Saving Prod1, Prod2 and Prod3 ------------");
//        orderRepository.save( new Order("Prod1", new BigDecimal("25.75")) );
//        repository.save( new Product("Prod2", new BigDecimal("14.99")) );
//        repository.save( new Product("Prod3", new BigDecimal("7.50")) );


//        List<Product> prods = productService.findAll();
//        List<OrderItem> items = prods.stream().map(prod -> new OrderItem(prod.getId(), prod.getPrice(), 1)).collect(Collectors.toList());
//
//        Order o1 = new Order();
//        o1.setItems(items);
//        o1.setTotal(new BigDecimal("48.24"));
//        o1.setDateTime(LocalDateTime.now());
//
//        System.out.println("------------ Saving order ------------");
//        orderRepository.save(o1);
//        System.out.println("------------ Saving order ------------");

//        System.out.println("------------ Find order ------------");
//        System.out.println(orderRepository.findAll());
//        System.out.println("------------ Find order ------------");

	}
}
