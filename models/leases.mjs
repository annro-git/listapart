import mongoose from "mongoose";

const leaseSchema = mongoose.Schema({
  name: String,
  arrival: { type: mongoose.Schema.Types.ObjectId, ref: 'instances' },
  departure: { type: mongoose.Schema.Types.ObjectId, ref: 'instances' }
})

const Lease = mongoose.model('leases', leaseSchema)

export default Lease