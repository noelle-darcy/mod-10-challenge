const Manager = require('../lib/manager');

test('creates manager object', () => {
    const manager = new manager('Noelle', 2894, 'noelle@gmail.com', 675); 

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('manager officeNumber', () => {
    const manager = new Manager ('Noelle', 2894, 'noelle@gmail.com', 675); 

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
})


test('creates manager role', () => {
    const manager = new manager('Noelle', 2894, 'noelle@gmail.com'); 

    expect(manager.getRole()).toEqual("Manager");
});