// object named Person with name Adri and age 28
const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "Adri",
    age: 28,
    hobbies: ["Sports", "Cooking"]
};

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}