const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const characterRoutes = require("./api/characters");
const categoryRoutes = require("./api/categories");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/characters", characterRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
