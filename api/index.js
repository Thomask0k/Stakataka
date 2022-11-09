import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    version: "0.0.1",
    name: "stakataka",
  });
});

app.listen(3000, () => {
  console.log(`Starting server on localhost:3000`);
});
