const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    it('instantiate an itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports property', () => {
        const itin = new Itinerary(['Dover', 'Portsmouth'])
        expect(itin.ports).toEqual(['Dover', 'Portsmouth']);
    });
});