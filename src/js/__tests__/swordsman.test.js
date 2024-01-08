import Swordsman from '../swordsman';

test('test correct create Swordsman', () => {
  const char = new Swordsman('Sword');

  const correctChar = {
    name: 'Sword',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(char).toEqual(correctChar);
});
