import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import productRoutes from "./src/routes/products.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import session from "express-session";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(session({
    secret:'pRzOHEAJfVloHd01SKkJwamR',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.use((req,res,next)=>{

   res.locals.userEmail = req.session.userEmail;

   next();

})
app.set("view engine", "ejs");

app.set("views", path.join(path.resolve(), "src", "views"));

app.use(ejsLayouts);
app.use("/", productRoutes);
app.use("/", userRoutes);

export default app;
