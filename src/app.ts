import * as express from "express";

const app = express();
const port = 3000;

app.use("/api", apiRoute);

app.listen(3000, () => {
  console.log(`app listening on ${port}`);
});
