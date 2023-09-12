import bcrypt from "bcryptjs"

const sampleUsers = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'John@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'Jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
]

export default sampleUsers