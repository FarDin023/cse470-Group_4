const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
app.use(cors());
app.use(express.json());

// app.use("/", (req, res)=>{
//     res.send("RankUP")
// })

const userRoute = require("./routes/UserRoute")
const postRoute = require("./routes/PostRoute")
const followerRoute = require("./routes/FollowerRoute");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(`Some Problem Occured: ${err}`);
  });

app.use("/api", userRoute);
app.use("/api", postRoute);
app.use("/api", followerRoute);

const PORT = 3000
app.listen(PORT, (req, res)=>{
    console.log(`Server running at PORT:${PORT}`)
})