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

### Getting started

**Starting RabbitMQ**

```
cd docker-rabbitmq
docker-compose up -d
```

_RabbitMQ Management: http://localhost:15672_  
_user: admin_  
_password: adm777_

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
