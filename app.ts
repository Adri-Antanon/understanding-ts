// Generics: <T>

// This is not generic by the way, but it's a good example of how to pass a type as a parameter to a function.
// const names: Array<string> = [];
// names[0] = 'Adri';
// names[0].split('').forEach((c) => console.log(c.toUpperCase()));

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// }).then((data) => console.log(data.split('').reverse().join('')));

// Generics allow us to create a reusable type that can be used in multiple places.

interface ObjA {
  name: string;
}

interface ObjB {
  age: number;
}

type OtherProps = {
  hobbies: string[];
};

const merge = <T, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge<ObjA, ObjB>({ name: 'Adri' }, { age: 28 });

console.log(mergedObj.age);

const mergedObj2 = merge<ObjA, ObjB & OtherProps>(
  { name: 'Adri' },
  { age: 28, hobbies: ['Sports', 'Cooking'] },
);

console.log(mergedObj2.hobbies);
