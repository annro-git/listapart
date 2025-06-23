import mongoose from "mongoose";

const instanceSchema = mongoose.Schema({
  itemList: [ Object ],
  completed: Boolean
})

const Instance = mongoose.model('instances', instanceSchema)

export default Instance