import { MongoClient } from "mongodb";
import { config } from "dotenv";

// Load .env file
config();

let client;

export const connectToDatabase = () => {
  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_DATABASE,
  } = process.env;
  const uri = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE}?authMechanism=DEFAULT`;

  console.log(uri);
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.connect().then(() => console.log("Connected to mongoDB"));
};
