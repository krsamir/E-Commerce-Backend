import express from "express";
import env from "dotenv";
import loginRoutes from "./app/Router/loginRoutes.js";
import userRoutes from "./app/Router/userRoutes.js";
import productRoutes from "./app/Router/productRoutes.js";
import transactionRoutes from "./app/Router/transactionRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// import bcryptjs from "bcryptjs";
env.config();
// eslint-disable-next-line no-undef
const { PORT, NODE_ENV } = process.env;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post("/images", (req, res) => {
//   console.log(req);
//   res.send({ data: "Images" });
// });

app.use((req, res, next) => {
  const { url, method, body } = req;
  if (
    url.match("/user") ||
    url.match("/auth") ||
    url.match("/product") ||
    url.match("/transaction")
  ) {
    console.log(
      `[ METHOD: ${method}  ROUTE: ${url} at ${new Date().toLocaleString()} ]`
    );
  }
  NODE_ENV === "development" &&
    method !== "GET" &&
    console.log("PAYLOAD: ", body);
  next();
});
// app.get("/", (req, res) => {
//   var salt = bcryptjs.genSaltSync(10);
//   var password = bcryptjs.hashSync("admin", salt);
//   res.send({ password });
// });
app.use("/auth", loginRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ status: 0, message: "Caught into some issue" });
});
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
