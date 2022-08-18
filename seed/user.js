const { faker } = require('@faker-js/faker');

let database = []

  async function createUsersNew () {
    for(var i = 0; i <= database.length; i++){
        let user = database[i]
        // console.log(user);
        await fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })

    }
}
createUsersNew();

async function createUsers (num) {
    for(var i = 0; i <= num; i++){
        let user = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            avatar: faker.image.imageUrl(width="640", height="480")
        }
        // console.log(user);
        await fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })

    }
}

// createUsers(100);