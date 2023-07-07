import express from 'express'
const app = express()
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/", (req, res)=>{
    res.send("RankUP")
})

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(`Some Problem Occured: ${err}`);
  });

const PORT = 3000
app.listen(PORT, (req, res)=>{
    console.log(`Server running at PORT:${PORT}`)
})