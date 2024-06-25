interface User {
    name:string
}

function saveUser(user:User) {
    console.log(user)
}

saveUser({
    name: "Jofre"
})
