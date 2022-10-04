require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const path = require("path");

app.use(cors());
app.use(express.json());

//db connection
require("./connect")();

const links = require("./routes/links");

app.use("/", links);

port = process.env.NODE_ENV = "production"
  ? process.env.OUR_PORT
  : process.env.APP_PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(process.cwd(), "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} listening on port ${port}`);
});
