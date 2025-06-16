import { createApp, defineEventHandler } from "h3";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const app = createApp();

const connect = async () => {
  await mongoose.connect(process.env.CONNECTION_STRING)
  console.log('Connected!')
}

try {
  connect()
} catch (e) {
  console.log(e)
}

app.use(defineEventHandler(() => "Hello world!"));

export default app