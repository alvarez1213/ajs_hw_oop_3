import Bowman from '../bowman';

test('test correct create Bowman', () => {
  const char = new Bowman('Robin');

  const correctChar = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(char).toEqual(correctChar);
});

test('Character damage()', () => {
  const char = new Bowman('Robin');
  char.damage(10);
  expect(char.health).toBe(92.5);
});

test('Character damage Error', () => {
  const char = new Bowman('Robin');
  char.damage(10);
  char.health = 0;
  expect(() => char.damage(10)).toThrow(Error);
});

test('Character damage health is 0 ', () => {
  const char = new Bowman('Robin');
  char.damage(200);
  const correctChar = {
    name: 'Robin',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(char).toEqual(correctChar);
});

test('Character levelUp', () => {
  const char = new Bowman('Robin');
  char.levelUp();
  const correctChar = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(char).toEqual(correctChar);
});

test('Character levelUp Error', () => {
  const char = new Bowman('Robin');
  char.health = 0;
  expect(() => char.levelUp()).toThrow(Error("Can't increase level of dead Character."));
});
