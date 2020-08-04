const ShippingOption = Object.freeze({
  ground: 1,
  priority: 2,
});

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function getShippingOption(shippingOption) {
  return getKeyByValue(ShippingOption, parseInt(shippingOption, 10)).toUpperCase();
}

export const getWeightInPounds = (weight) => {
  const { weightValue, weightUnit } = weight;
  if (weightUnit === 'KG') {
    return weightValue * 2.20462;
  } if (weightUnit === 'Ounces') {
    return weightValue * 0.0625;
  }
  return weightValue;
};

export function getShippingCost(weight, shippingOption) {
  const shippingRate = 0.40;
  const weightInPounds = getWeightInPounds(weight);
  return (Number(weightInPounds) * shippingRate * (shippingOption === '1' ? 1 : 1.5)).toFixed(2);
}
