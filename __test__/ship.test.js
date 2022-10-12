const Ship = require('../src/ship');

describe('Ship constructor', () => {
    it('returns a ship object', () => {
        expect(new Ship('Artemis')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const ship = new Ship('Artemis');
        expect(ship.name).toEqual('Artemis');
    });

    it('has a starting port', () => {
        const ship = new Ship('Artemis');
        expect(ship.startingPort).toBe('Portsmouth');
    });
});

describe('setSail', () => {
    it('can set sail from a starting port', () => {
        const ship = new Ship('Aurora');         //setup
        ship.setSail();                         //excerise

        expect(ship.startingPort).toBeFalsy(); //verify
    });
});
