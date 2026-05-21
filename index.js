import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import productRoutes from "./src/routes/products.routes.js";
import userRoutes from "./src/routes/user.routes.js";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", path.join(path.resolve(), "src", "views"));

app.use(ejsLayouts);
app.use("/", productRoutes);
app.use("/", userRoutes);

export default app;
