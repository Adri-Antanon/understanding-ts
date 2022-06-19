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
  hobbies?: string[];
};

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge<ObjA, ObjB>({ name: 'Adri' }, { age: 28 });

console.log(mergedObj.age);

const mergedObj2 = merge<ObjA, ObjB & OtherProps>(
  { name: 'Adri' },
  { age: 28, hobbies: ['Sports', 'Cooking'] },
);

console.log(mergedObj2.hobbies);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(
  element: T | T[],
): [T | T[], string] | string => {
  let descriptionText = 'The list has ' + element.length + ' elements: ';
  if (element.length > 1) {
    descriptionText += element[0];
    for (let i = 1; i < element.length; i++) {
      descriptionText += ', ' + element[i];
    }
  }

  if (!Array.isArray(element)) {
    descriptionText = 'The list only has one element: ' + element;
  }

  return [element, descriptionText];
};

const namesList = countAndDescribe<string>(['Adri', 'Juan', 'Pedro']);

console.log(namesList);

const emptyList = countAndDescribe<string>([]);

console.log(emptyList);

const oneNameList = countAndDescribe<string>('Adri');

console.log(oneNameList);

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U,
): T[U] => {
  return obj[key];
};

console.log('value: ', extractAndConvert({ name: 'Adri' }, 'name'));

// Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  date: Date,
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['Adri', 'Juan', 'Pedro'];
// names.push('Javi');
