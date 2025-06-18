import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
  } catch (e) {
    console.error(e)
  }
  console.log('Connected!')
}

export default connect