const STARTINGPORT = 'Portsmouth';


function Ship(name) {
    this.name = name;
    this.startingPort = STARTINGPORT;
}

module.exports = Ship;