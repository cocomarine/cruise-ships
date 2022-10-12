const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Ship constructor', () => {
    it('returns a ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        const port = new Port('Portsmouth')
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('can set sail from a starting port', () => {
        const ship = new Ship('Venice');         //setup
        ship.setSail();                         //excerise

        expect(ship.startingPort).toBeFalsy(); //verify
    });
});
