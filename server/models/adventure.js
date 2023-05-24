import mongoose from "mongoose";

const adventureSchema = mongoose.Schema({
  title: String,
  details: String,
  createdBy: String,
  tags: [String],
  image: String,
  location: String,
  adventureres: [String],
  interests: [String],
  adventureresCount: {
    type: Number,
    default: 1,
  },
  interestsCount: {
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
