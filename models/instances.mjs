import mongoose from "mongoose";
import Item from "./items.mjs";

const instanceSchema = mongoose.Schema({
  instances: [Item],
  status: Number
})

const Instance = mongoose.model('instances', instanceSchema)

export default Instance