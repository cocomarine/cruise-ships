const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Ship constructor', () => {
    it('returns a ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        const port = new Port('Portsmouth')
        const ship = new Ship(port);            //dependency inversion
        expect(ship.currentPort).toBe(port);
    });

    it('has a previous port', () => {
        const port = new Port('Portmouth');
        const ship = new Ship(port);
        expect(ship.previousPort).toBeNull();
    });

});

describe('setSail', () => {
    it('can set sail from a starting port', () => {
        const ship = new Ship('Venice');         //setup
        ship.setSail();                         //excerise

        expect(ship.startingPort).toBeFalsy(); //verify
    });

    it('sets a previous port property on the ship to the current port', () => {
        const ship = new Ship('Dover');
        ship.setSail();

        expect(ship.currentPort).toBeNull();
    });

});

describe('dock', () => {
    it('can dock at a different port', () => {
        const portsmouth = new Port("Portsmouth");
        const ship = new Ship(portsmouth);
        
        const dover = new Port("Dover");
        ship.dock(dover);

        expect(ship.currentPort).toBe(dover);
    });
});