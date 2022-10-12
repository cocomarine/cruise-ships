

function Ship(port) {
    this.startingPort= port;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
}

module.exports = Ship;