import express from "express";
import "dotenv/config";

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  return res.send("hey i'm working....");
});

// routes

import routes from "./routes/index.js"
app.use(routes)




app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));
