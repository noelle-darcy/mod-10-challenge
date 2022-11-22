const Engineer = require('../lib/engineer');

test('creates engineer object', () => {
    const Engineer = new Engineer('Noelle', 2894, 'noelle@gmail.com', 'noelle-darcy'); 

    expect(engineer.github).toEqual(expect.any(String));
});

test('github', () => {
    const Engineer = new Engineer('Noelle', 2894, 'noelle@gmail.com', 'noelle-darcy'); 

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('creates Engineer role', () => {
    const Engineer = new Engineer ('Noelle', 2894, 'noelle@gmail.com', 'noelle-darcy'); 

    expect(Engineer.getRole()).toEqual("Engineer");
});