const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    it('instantiate an itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});


// describe('Port constructor', () => {
//     it('instantiate a port object', () => {
//         expect(new Port('Dover')).toBeInstanceOf(Object);
//     });

//     it('sets the name property', () => {
//         const port = new Port('Dover');
//         expect(port.name).toEqual('Dover');
//     });
// });