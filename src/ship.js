

function Ship(startingPort) {
    this.startingPort= startingPort;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
}

module.exports = Ship;