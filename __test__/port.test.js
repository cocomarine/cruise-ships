const Port = require('../src/port');

describe('Port constructor', () => {
    it('instantiate a port object', () => {
        expect(new Port('Dover')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    });
});

describe('Add ship', () => {
    it('sets the ships property', () => {
        const dover = new Port('Dover');
        expect(dover.ships).toEqual([]);
    });

    it('add ship to port', () => {
        const dover = new Port('Dover');
        const ship = {};

        dover.addShip(ship);
        expect(dover.ships).toContain(ship);
    });
});

