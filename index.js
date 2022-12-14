//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//PORT
app.listen(8000, () => {
  console.log("Server running successfully");
});

//run the web by 'nodemon index.js'