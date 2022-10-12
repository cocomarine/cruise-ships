

function Ship(port) {
    this.currentPort = port;
    this.previousPort = null;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
    this.currentPort = this.previousPort;
}

Ship.prototype.dock = function(port) {
    this.currentPort = port;
}

module.exports = Ship;