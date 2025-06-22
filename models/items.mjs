import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: String,
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'rooms' },
  condition: Number,
  comment: String,
})

const Item = mongoose.model('items', itemSchema)

export default Item