import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  isAdmin: Boolean,
})

const User = mongoose.model('users', userSchema)

export default User