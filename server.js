import express from "express";
import env from "dotenv";
import loginRoutes from "./app/Router/loginRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
env.config();
const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const { url, method } = req;
  if (url.match("/api") || url.match("/auth")) {
    console.log(
      `[ METHOD: ${method}  ROUTE: ${url} at ${new Date().toLocaleString()} ]`
    );
  }
  next();
});
app.use("/auth", loginRoutes);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});
app.listen(PORT, () =>
  console.log([
    { status: `APP STARTED ON PORT ${PORT} AT ${new Date().toLocaleString()}` },
  ])
);
