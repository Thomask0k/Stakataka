import express from "express";
import {
  getTeams,
  createTeam,
  updateTeam,
  getTeambyId,
  deleteTeam,
} from "../db";

const teamsRouter = express.Router();

teamsRouter.get("/", async (req, res) => {
  return res.json(await getTeams());
});

teamsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const team = await getTeambyId(id);

  if (!team) {
    return res.status(404).json({
      message: "Cannot find Team",
    });
  }

  return res.status(200).json(team);
});

teamsRouter.post("/", async ({ body }, res) => {
  const title = body.title;

  if (!title) {
    return res.status(400).json({
      message: "Please provide a title",
    });
  }

  const team = await createTeam(title);

  return res.json(team);
});

teamsRouter.put("/:id", async ({ body, params }, res) => {
  const id = params.id;
  const { title, pokemon } = body;

  if (!title) {
    return res.status(400).json({
      message: "Please provide a title",
    });
  }

  if (!pokemon || !Array.isArray(pokemon)) {
    return res.status(400).json({
      message: "Pokemon should be a array of pokemon names",
    });
  }

  if (pokemon.length > 6) {
    return res.status(400).json({
      message: "Could only add 6 pokemon max to a team",
    });
  }

  return res.json(await updateTeam(id, title, pokemon));
});

teamsRouter.delete("/:id", async (req, res) => {
  const team = await getTeambyId(req.params.id);

  if (!team) {
    return res.status(404).json({
      message: "Cannot find Team",
    });
  }

  await deleteTeam(req.params.id);

  return res.send();
});

export default teamsRouter;
