import mongoose from "mongoose";

const feedPostSchema = mongoose.Schema({
  title: String,
  details: String,
  createdBy: String,
  tags: [String],
  image: String,
  likes: {
    type: Number,
    default: 1,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const FeedPost = mongoose.model("FeedPost", feedPostSchema);

export default FeedPost;
