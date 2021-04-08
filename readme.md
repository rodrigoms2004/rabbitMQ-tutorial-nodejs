# RabbitMQ

Simple RabbitMQ lab

## Docker Image

https://www.rabbitmq.com/download.html

### Run Docker

```
sudo docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### Execute commands inside container

```
sudo docker container exec rabbitmq <SHELL COMMAND>
```


Exemple command *rabbitmqctl list_bindings*
```
sudo docker container exec rabbitmq rabbitmqctl list_bindings
```

### Access it

Username and password: guest

http://localhost:15672


## Tutorials

[RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)


### Simple things first
[Hello world](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)


### Work Queues

[Work Queues](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)

```
sudo docker container exec rabbitmq rabbitmqctl list_queues name messages_ready messages_unacknowledged
```

[Queues](https://www.rabbitmq.com/queues.html)

### Exchanges

[Publish/Subscribe](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)

```
sudo docker container exec rabbitmq rabbitmqctl list_exchanges
sudo docker container exec rabbitmq rabbitmqctl list_bindings
```

### Routing

[Routing](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html)

### Topics

[Topics](https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html)

### Remote procedure Call (RPC)

[RPC](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html)



## Production notes

* [Documentation](https://www.rabbitmq.com/documentation.html)
* [Consumer Acknowledgements and Publisher Confirms](https://www.rabbitmq.com/confirms.html)
* [Production Checklist](https://www.rabbitmq.com/production-checklist.html)
* [Monitoring](https://www.rabbitmq.com/monitoring.html)






