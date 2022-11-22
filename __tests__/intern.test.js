const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new intern('Noelle', 2894, 'noelle@gmail.com', 'FAU'); 

    expect(intern.school).toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new intern('Noelle', 2894, 'noelle@gmail.com', 'FAU'); 

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test('creates intern role', () => {
    const Intern = new Intern ('Noelle', 2894, 'noelle@gmail.com', 'FAU'); 

    expect(intern.getRole()).toEqual("Intern");
});