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

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
