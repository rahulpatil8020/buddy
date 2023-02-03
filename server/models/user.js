import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  adventures: {
    type: [String],
    default: [],
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  posts: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
