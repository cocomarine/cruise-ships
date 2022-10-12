const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary constructor', () => {
    it('instantiate an itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports property', () => {
        const dover = new Port('Dover');                //setup
        const portsmouth = new Port('Portsmouth');      //setup
        const itin = new Itinerary([dover, portsmouth]); //exercise
        expect(itin.ports).toEqual([dover, portsmouth]); //verify
    });
});