import { Calculate, StringManipulation } from './NumericTest';

describe('Calculate', () => {
  it('should return 0 if input is negative', () => {
    expect(Calculate(-1)).toBe(0);
  });

  it('should increment the input by 1', () => {
    expect(Calculate(1)).toBe(2);
  });
});

describe('StringManipulation', () => {
  it('should concate Welcome to input', () => {
    expect(StringManipulation('Mohan')).toBe('Welcome Mohan');
  });
});
