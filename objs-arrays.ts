// enum  with admin, read_only and user roles
enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY',
    USER = 'USER'
}
// enum with the status of the user
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: "Adri",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}