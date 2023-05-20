import mongoose from "mongoose";

const feedpostSchema = mongoose.Schema({
  title: String,
  details: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: Number,
    default: 1,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Feedpost = mongoose.model("Feedpost", feedpostSchema);

export default Feedpost;
