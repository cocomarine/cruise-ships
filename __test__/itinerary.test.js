const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    it('instantiate an itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});