import User from '../models/users.mjs'
import { Router } from 'express'

const usersRouter = Router()

// CREATE USER
usersRouter.post('/', (req, res) => {
  const { email, phone, firstName, lastName, isAdmin } = req.body
  const newUser = new User({ email, phone, firstName, lastName, isAdmin })
  newUser.save()
  res.json({ result: true })
})

export { usersRouter }