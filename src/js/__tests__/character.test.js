import Character from '../character';

test('test "type" Error', () => {
  expect(() => new Character('qwerty', 'qwerty', 0, 0)).toThrow(Error('invalid "type"'));
});

test('test "name" Error Character', () => {
  expect(() => new Character('Reeeeeally Long Name')).toThrow(Error('"name" does not meet the length'));
});

test('test correct create Character', () => {
  const char = new Character('Character', 'Magician');
  char.attack = 10;
  char.defence = 40;

  const correctChar = {
    name: 'Character',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(char).toEqual(correctChar);
});
