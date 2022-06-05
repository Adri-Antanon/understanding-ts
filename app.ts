// object named Person with name Adri and age 28
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Adri",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}