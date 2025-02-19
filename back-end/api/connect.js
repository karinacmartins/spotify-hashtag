import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://karinacastroma:I89usalxjswPFTw6@cluster0.yre53.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyApi");

console.log(db);
