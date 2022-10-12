

function Ship(port) {
    this.currentPort= port;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
}

Ship.prototype.dock = function(port) {
    this.currentPort = port;
}

module.exports = Ship;