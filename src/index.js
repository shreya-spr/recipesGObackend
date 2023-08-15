import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js"

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const DB = process.env.DB_URI;
const PORT = process.env.PORT || 3001;

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    // "mongodb+srv://user1:Harry123@recipes.vrh4qcu.mongodb.net/recipes?retryWrites=true&w=majority",
    process.env.DB_URI,
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
  );


app.listen(PORT, ()=> console.log("SERVER STARTED"));