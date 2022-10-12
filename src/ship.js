const STARTINGPORT = 'Portsmouth';


function Ship(name) {
    this.name = name;
    this.startingPort = STARTINGPORT;
}

Ship.prototype.setSail = function(port) {
    this.startingPort = port;
}

module.exports = Ship;