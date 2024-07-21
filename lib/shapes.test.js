// Import shape objects
const { Circle, Square, Triangle } = require('./shapes');

// Testing for circle logo
describe('Circle', () => {
    test('correct output', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
})

//Testing for square logo
describe('Square', () => {
    test('correct output', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
    })
})

//Testing for triangle logo and hex code
describe('Triangle', () => {
    test('correct output', () => {
        const shape = new Triangle();
        shape.setColor("#0000ff");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#0000ff" />');
    })
})

