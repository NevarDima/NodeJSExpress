import express from "express"
import { createUser, getUsers, getUserById, deleteUserById, updateUser } from '../controllers/user-controllers.js'

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

router.delete('/:id', deleteUserById)

router.patch('/:id', updateUser)

export default router