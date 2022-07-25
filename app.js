const express = require("express");
const app = express();
require("./connection/mongoconn");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("public"));
app.use(cors());
app.use(fileUpload());
const port = 3001;

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

const propertiesRoutes = require("./routes/properties");
app.use("/properties", propertiesRoutes);

app.listen(port, () => {
  console.log("server running");
});
