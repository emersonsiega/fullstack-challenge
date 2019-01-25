# fullstack-challenge

A challenge project :)

**sales-service**  
Service with a RESTFul API, which receive orders from an App and send this orders to dispatcher via RabbitMQ.

**dispatcher-service**  
It's a dispatcher of orders, who fetch orders on RabbitMQ and update their status.

**sales-app**  
Web application connected to sales-service. It's a simple checkout app that enable users to make some orders.  
The app was developed following [this](https://www.figma.com/proto/0wYAucbtpxfzQlbdbC0uRagV/Challenge?node-id=1%3A2&scaling=scale-down) prototype.

### Getting started

**Starting RabbitMQ**

```
cd docker-compose
docker-compose up -d
```

**Run sales-service**

```
//TODO
```

**Run dispatcher-service**

```
//TODO
```

**Run sales-app**

```
cd sales-app
yarn install
yarn start
```
