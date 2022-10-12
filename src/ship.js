

function Ship (itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }

Ship.prototype.setSail = function() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
}

Ship.prototype.dock = function() {
    this.currentPort = port;
}

module.exports = Ship;