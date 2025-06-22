import mongoose from "mongoose";
import Room from "./rooms.mjs";

const itemSchema = mongoose.Schema({
  name: String,
  room: Room,
  condition: Number,
  comment: String,
})

const Item = mongoose.model('items', itemSchema)

export default Item