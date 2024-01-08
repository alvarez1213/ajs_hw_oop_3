import Undead from '../undead';

test('test correct create Undead', () => {
  const char = new Undead('Dead');

  const correctChar = {
    name: 'Dead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(char).toEqual(correctChar);
});
