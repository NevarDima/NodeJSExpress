import {v4 as uuidv4} from 'uuid'

let users = []

export const createUser = (req, res) => {
    const user = req.body
    users.push({...user, id: uuidv4()})
    res.send(`User with name: ${user.firstName} abbed`)
}

export const getUsers = (req, res) => {
    res.send(users)
}

export const getUserById = (req,res) => {
    const { id } = req.params
    res.send(users.find((user) => user.id == id))
}

export const deleteUserById = (req,res) => {
    const { id } = req.params
    users = users.filter((user) => user.id != id)
    res.send(`User with id: ${id} was deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id == id)
    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age
    }
    res.send(`User with id: ${id} has been updated`)
}