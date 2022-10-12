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