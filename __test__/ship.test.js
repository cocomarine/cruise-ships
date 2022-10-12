const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('returns a ship object', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting point', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });

    it('has a previous port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.previousPort).toBeNull();
    });


});

describe('setSail', () => {
    it('can set sail', () => {
        const port = new Port('Venice');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);        
        ship.setSail();                       

        expect(ship.startingPort).toBeFalsy(); 
    });

    it('sets a previous port property on the ship to the current port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        ship.setSail();

        expect(ship.currentPort).toBeNull();
    });

});

describe('dock', () => {
    it('can dock at a different port', () => {

        const portsmouth = new Port("Portsmouth");
        const dover = new Port("Dover");
        const itinerary = new Itinerary([portsmouth, dover]);
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(dover);
    });
});