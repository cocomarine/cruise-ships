

function Ship(port) {
    this.currentPort= port;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
}

module.exports = Ship;