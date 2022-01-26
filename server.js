import express from "express";
import env from "dotenv";
env.config();
const { PORT } = process.env;
const app = express();

app.use(express.json());

app.listen(PORT, () =>
  console.log([
    { status: `APP STARTED ON ${PORT} AT ${new Date().toLocaleString()}` },
  ])
);
