# fullstack-challenge

A challenge project :)

### sales-service
Service with a RESTFull API, which receive orders from an App and send this orders to a dispatcher.

### dispatcher-service
It's a dispatcher of orders, who receives orders of `sales-service` to be processed via JMS message and, after some while, send the orders and update their status.

### sales-app
Web application connected to `sales-service`. It's a simple checkout app that enable users to make some orders.
