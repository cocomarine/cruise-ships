
function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    const ships = this.ships;
    ships.push(ship);
};

module.exports = Port;