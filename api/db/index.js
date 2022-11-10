import { MongoClient } from "mongodb";
import { config } from "dotenv";
import { v4 as uuid } from "uuid";

// Load .env file
config();

let client;
let teamCollection;

export const connectToDatabase = async () => {
  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_DATABASE,
  } = process.env;
  const uri = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE}?authMechanism=DEFAULT`;

  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect().then(() => console.log("Connected to mongoDB"));

  teamCollection = client.db().collection("teams");
};

const teamFilter = (id) => {
  return { teamId: { $eq: id } };
};

export const getTeams = async () => {
  const teams = await teamCollection.find({});

  return teams.toArray();
};

export const getTeambyId = (id) => {
  return teamCollection.findOne(teamFilter(id));
};

export const createTeam = async (title) => {
  const team = {
    teamId: uuid(),
    title,
    pokemon: [],
  };

  await teamCollection.insertOne(team);

  return team;
};

export const updateTeam = async (id, title, pokemon) => {
  await teamCollection.updateOne(teamFilter(id), {
    $set: { title, pokemon },
  });

  return getTeambyId(id);
};

export const deleteTeam = (id) => {
  return teamCollection.deleteOne(teamFilter(id));
};
