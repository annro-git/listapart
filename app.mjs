import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import connect from './models/connection.mjs'

import { itemRouter } from './routes/items.mjs'
import { roomRouter } from './routes/rooms.mjs'
import { instanceRouter } from './routes/instances.mjs'

connect()

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/items', itemRouter)
app.use('/rooms', roomRouter)
app.use('/instances', instanceRouter)

app.listen(3000)