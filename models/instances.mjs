import mongoose from "mongoose";

const instanceSchema = mongoose.Schema({
  instances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
  status: Number
})

const Instance = mongoose.model('instances', instanceSchema)

export default Instance