import Zombie from '../zombie';

test('test correct create Zombie', () => {
  const char = new Zombie('Zombieman');

  const correctChar = {
    name: 'Zombieman',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(char).toEqual(correctChar);
});
