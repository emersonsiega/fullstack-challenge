# fullstack-challenge

A challenge project :)

**challenge-core**  
Model and repository classes used by other modules.

**sales-service**  
RESTFul API that receive orders by the sales-app and send to dispatcher via RabbitMQ.

**dispatcher-service**  
Fetch orders from RabbitMQ and update their status.

**sales-app**  
Simple checkout app that allow users to make some orders. Developed following [this](https://www.figma.com/proto/0wYAucbtpxfzQlbdbC0uRagV/Challenge?node-id=1%3A2&scaling=scale-down) prototype.

## Getting started

All services are running with docker-compose (except MongoDB, that is on MLab).

Run `mvn clean install` to build the project and create docker images for the services.

Run `docker-compose up -d` to start all containers

**RabbitMQ Management** -> http://localhost:15672  
_user: admin_  
_password: adm777_

**sales-service** -> Running localhost 8080  
**dispatcher-service** -> Running localhost 8081  
**sales-app** -> http://localhost:3000
