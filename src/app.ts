import express from "express";
import { db } from "./data/connection";
import apiRouter from "./routes/api.routes";

const app = express();
const port = 3000;

db.checkConnection();

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log(`app listening on ${port}`);
});
