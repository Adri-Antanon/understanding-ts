type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor,
): Combinable => {
  let result: Combinable;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
};

const combinedAges = combine(30, 12, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Adri', 'Vasile', 'as-text');
console.log(combinedNames);
