type Combine = number | string;

const combine = (n1: Combine, n2: Combine): Combine => {
  let result: Combine;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
};

const combinedAges = combine(30, 12);
