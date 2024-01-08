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

test('Character damage', () => {
  const char = new Character('Char', 'Magician');
  char.attack = 10;
  char.defence = 40;
  char.damage(10);
  expect(char.health).toBe(94);
});

test('Character damage Error', () => {
  const char = new Character('Char', 'Magician');
  char.damage(10);
  char.health = 0;
  expect(() => char.damage(10)).toThrow(Error);
});

test('Character damage health is 0 ', () => {
  const char = new Character('Char', 'Magician');
  char.attack = 10;
  char.defence = 40;
  char.damage(200);
  const correctChar = {
    name: 'Char',
    type: 'Magician',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(char).toEqual(correctChar);
});

test('Character levelUp', () => {
  const char = new Character('Char', 'Magician');
  char.attack = 10;
  char.defence = 40;
  char.levelUp();  
  const correctChar = {
    name: 'Char',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(char).toEqual(correctChar);
});

test('Character levelUp Error', () => {
  const char = new Character('Char', 'Magician');
  char.attack = 10;
  char.defence = 40;
  char.health = 0;
  expect(() => char.levelUp()).toThrow(Error("Can't increase level of dead Character."));
});
