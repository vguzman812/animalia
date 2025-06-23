import bcrypt from "bcryptjs";
import type { User } from "../types/index.js";

const sampleUsers: User[] = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "john@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Jane Doe",
        email: "jane@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default sampleUsers;
