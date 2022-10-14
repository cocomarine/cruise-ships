const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Ship', () => {
    let dover;
    let venice;
    let itinerary;
    let ship;
    
    beforeEach(() => {
        dover = new Port("Dover");
        venice = new Port("Venice");
        itinerary = new Itinerary([dover, venice]);
        ship = new Ship(itinerary);  
    });
    describe('with ports and an itinerary', () => {
        it('returns a ship object', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('has a starting point', () => {            
            expect(ship.currentPort).toBe(dover);
        });

        it('has a previous port', () => {            
            expect(ship.previousPort).toBeNull();
        });

        it('get added to port on instantiation', () => {            
            expect(dover.ships).toContain(ship);
        });
    });
});

describe('setSail', () => {
    it('can set sail', () => {
        const venice = new Port("Venice");
        const dover = new Port("Dover");
        const itinerary = new Itinerary([venice, dover]);
        const ship = new Ship(itinerary);  
        ship.setSail();                       

        expect(ship.currentPort).toBeFalsy(); 
        expect(venice.ships).not.toContain(ship);
    });

    it('sets a previous port property on the ship to the current port', () => {
        const portsmouth = new Port("Portsmouth");
        const dover = new Port("Dover");
        const itinerary = new Itinerary([portsmouth, dover]);
        const ship = new Ship(itinerary);
        ship.setSail();

        expect(ship.currentPort).toBeNull();
    });

    it('throws an error when sailing further than the last port in itinerary', () => {
        const portsmouth = new Port("Portsmouth");
        const dover = new Port("Dover");
        const itinerary = new Itinerary([portsmouth, dover]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();


        expect(() => ship.setSail()).toThrow('Reached end of itinerary');
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
        expect(dover.ships).toContain(ship);
    });
});

