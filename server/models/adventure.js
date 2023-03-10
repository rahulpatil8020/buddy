import mongoose from "mongoose";

const adventureSchema = mongoose.Schema({
  title: String,
  details: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  adventureres: {
    type: Number,
    default: 1,
  },
  interests: {
    type: Number,
    default: 1,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  adventureDate: {
    type: Date,
  },
});

const AdventurePost = mongoose.model("AdventurePost", adventureSchema);

export default AdventurePost;
