import Magician from '../magician';

test('test correct create Magician', () => {
  const char = new Magician('Mace');

  const correctChar = {
    name: 'Mace',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(char).toEqual(correctChar);
});

test('test "name" Error Magician', () => {
  expect(() => new Magician('Reeeeeally Long Name')).toThrow(Error('"name" does not meet the length'));
});
