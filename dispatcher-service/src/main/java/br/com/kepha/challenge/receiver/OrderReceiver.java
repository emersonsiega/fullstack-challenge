package br.com.kepha.challenge.receiver;

import org.springframework.stereotype.Component;

import java.util.concurrent.CountDownLatch;

@Component
public class OrderReceiver {

	private CountDownLatch latch = new CountDownLatch(1);

	public void receiveOrder(String orderId) {
		System.out.println("OrderID received <"+orderId+">");
		latch.countDown();
	}

	public CountDownLatch getLatch() {
		return latch;
	}

}
