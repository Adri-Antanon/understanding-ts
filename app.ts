const add = (a: number, b: number): number => {
  return a + b;
};

const printResult = (num: number): void => {
  console.log('Result: ' + num);
};

printResult(add(5, 12));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

const addAndHandler = (a: number, b: number, cb: (num: number) => void) => {
  const result = a + b;
  cb(result);
};

addAndHandler(5, 12, (result) => {
  console.log(result);
});
