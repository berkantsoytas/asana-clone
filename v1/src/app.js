const express = require("express");
const helmet = require("helmet");
const config = require("./config");

config();

const chalk = require("chalk");
const log = console.log;

const app = express();
app.use(express.json());
app.use(helmet);

app.listen(process.env.APP_PORT, () => {
  log(
    chalk.green(
      "Server is Ready? " +
        chalk.blue.underline.bold("I'm looking right now.") +
        " Yeess server is ready."
    )
  );
});
