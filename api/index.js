import express from "express";
import { connectToDatabase } from "./db";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    version: "0.0.1",
    name: "stakataka",
  });
});

app.get("/hahaha", (req, res) => {
  return res.send("hahahah");
});

connectToDatabase()
  .then(() => {
    app.listen(4200, () => {
      console.log(`Starting server on localhost:4200`);
    });
  })
  .catch((error) => {
    console.error(error.message, error.stack);

    process.exit(1);
  });
