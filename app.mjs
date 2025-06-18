import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import connect from './models/connection.mjs'

import { usersRouter } from './routes/users.mjs'

connect()

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users', usersRouter)

app.listen(3000)