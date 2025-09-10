const me = {
    name: 'Vlad',
    age: 18,
    isProgrammer: true,
    sayHi(name) {
        return `Hi ${name}`
    }
}

console.log(me, me.sayHi('you🫵'))

const users = [
    {
        name: 'John',
        age: 35,
        isAdmin: true,
    },
    {
        name: 'Andrew',
        age: 22,
        isAdmin: false,
    },
    {
        name: 'Tom',
        age: 28,
        isAdmin: true,
    },
    {
        name: 'Ashley',
        age: 20,
        isAdmin: false,
    },
]

let simpleUsers = 0

function simpleUsersCount() {
    for (let i = 0; i < users.length; i++) {
        if (!users[i].isAdmin) {
            simpleUsers++;
        }
    }
    return `Count of simple users is ${simpleUsers}`
}

console.log(simpleUsersCount())