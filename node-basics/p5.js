// assert module (package) -> exception (Run time errors) handling

const assert = require('assert')

// assert(10 > 12)

const x = [
    {
        name: "Raju"
    }
];

const y = {
    name: "raju"
};

const z = [
    {
        name: "Raju"
    }
];

 // assert.deepStrictEqual(x,y) // structure,datatype,property,case

 assert.notDeepStrictEqual(x,z)