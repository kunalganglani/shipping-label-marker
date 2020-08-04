import { getWeightInPounds } from '../features/shipping-label-maker/shipping-cost';

test('getWeightInPounds works as expected', () => {
  const weight = {
    weightValue: 10,
    weightUnit: 'KG',
  };

  const weightInOunces = {
    weightValue: 10,
    weightUnit: 'Ounces',
  };

  expect(getWeightInPounds(weight)).toBe(22.0462);
  expect(getWeightInPounds(weightInOunces)).toBe(0.625);
});
