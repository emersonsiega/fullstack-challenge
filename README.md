# fullstack-challenge

A challenge project received from Kepha during the hiring process.
This challenge have three parts:
 - Back-end service to provide some products and receive sales orders.
 - Back-end service to dispatch the received orders via RabbitMQ.
 - Front-end app to make the orders.
 

**challenge-core**  
Model and repository classes used by other modules.

**sales-service**  
RESTFul API that receive orders by the sales-app and send to dispatcher via RabbitMQ.

**dispatcher-service**  
Fetch orders from RabbitMQ and update their status.

**sales-app**  
Simple checkout app that allow users to make some orders. Developed following [this](https://www.figma.com/proto/0wYAucbtpxfzQlbdbC0uRagV/Challenge?node-id=1%3A2&scaling=scale-down) prototype.

## Getting started

Services are running with docker-compose, except MongoDB and RabbitMQ. (These two need to be deployed manually)

Run `mvn clean install` to build the project and create docker images for the services. *(Need Java 11 instaled)*  

Run `docker-compose up -d` to start containers

RabbitMQ process messages every 30 seconds.
