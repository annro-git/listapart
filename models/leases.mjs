import mongoose from "mongoose";
import Instance from "./instances.mjs";

const leaseSchema = mongoose.Schema({
  name: String,
  arrival: Instance,
  departure: Instance
})

const Lease = mongoose.model('leases', leaseSchema)

export default Lease