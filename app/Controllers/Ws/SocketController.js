'use strict'

class SocketController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onConnection(data){
    console.log(this.socket.id)
    console.log(data)
  }
}

module.exports = SocketController
