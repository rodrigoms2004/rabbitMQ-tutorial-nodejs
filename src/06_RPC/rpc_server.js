// https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html

// node rpc_server.js

const amqp = require('amqplib/callback_api')
const { fibonacci } = require('./util')

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) {
    throw error0
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1
    }
    const queue = 'rpc_queue'

    channel.assertQueue(queue, {
      durable: false
    })
    channel.prefetch(1)
    console.log(' [x] Awaiting RPC requests')
    channel.consume(queue, function reply(msg) {
      const n = parseInt(msg.content.toString())
      
      console.log(" [.] fib(%d)", n)

      const r = fibonacci(n)

      channel.sendToQueue(msg.properties.replyTo, Buffer.from(r.toString()), {
        correlationId: msg.properties.correlationId
      })

      channel.ack(msg)
    })

  })
})