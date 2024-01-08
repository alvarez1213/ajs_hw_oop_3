import Daemon from '../daemon';

test('test correct create Daemon', () => {
  const char = new Daemon('Demon');

  const correctChar = {
    name: 'Demon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(char).toEqual(correctChar);
});
