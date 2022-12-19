const { Posts, Users } = require("../models")
const db = require("./db")
const infoToSeed = require("../templates/template")

async function seed (){
    await db.sync({force: true})

    for (let i = 0; i < infoToSeed.length; i++){
        await Posts.create({
            username: infoToSeed[i]["username"],
            content: infoToSeed[i]["content"]
        })
        console.log()
    }

    await Users.create({
        username: 'Mr. Star',
        email: 'bigpinkloser@gmail.com'
    })
    await Users.create({
        username: 'summer_propogandant',
        email: 'summerP@gmail.com'
    })
    await Users.create({
        username: 'S4nt4_H3t3R',
        email: 'deletesantapls@gmail.com'
    })
    
    console.log('database is populated!!')

}

seed()