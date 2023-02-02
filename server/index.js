import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;
const CONNECTION_URL =
  "mongodb+srv://thorrp:thorrp@cluster0.enxrb.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`))
  )
  .catch((error) => console.log(error));