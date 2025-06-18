import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: String,
  room: String,
  condition: Number,
  adminComment: String,
  userComment: String,
})

const Item = mongoose.model('items', itemSchema)

export default Item