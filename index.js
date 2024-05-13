import express from "express"
import { data } from "./static.json.mjs"

const server = express();

const port = 8090;

server.all('/', (req, res) => {
    res.json(data);
});

server.listen(port, () => {
  console.log(`${new Date()} - Server listening at http://localhost:${port}`);
});