import calculateHealth from '../app';


test('should be healthy', () => {
  const result = calculateHealth({ health: 100 });
  expect(result).toBe('healthy');
});

test('should be wounded', () => {
  const result = calculateHealth({ health: 80 });
  expect(result).toBe('wounded');
});

test('should be critical', () => {
  const result = calculateHealth({ health: 10 });
  expect(result).toBe('critical');
});
