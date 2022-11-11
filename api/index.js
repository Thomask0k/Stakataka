import express from "express";
import { connectToDatabase } from "./db";
import pokemonRouter from "./pokemon";
import teamsRouter from "./teams";
import cors from "cors";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.use("/pokeapi", pokemonRouter);
app.use("/teams", teamsRouter);

app.get("/", (req, res) => {
  return res.json({
    version: "0.0.1",
    name: "stakataka",
  });
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
