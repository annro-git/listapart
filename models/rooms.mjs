import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: String,
})

const Room = mongoose.model('rooms', roomSchema)

export default Room