import * as express from "express";
import apiRouter from "./routes/api.routes";

const app = express();
const port = 3000;

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log(`app listening on ${port}`);
});
