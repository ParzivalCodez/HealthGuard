// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();

let Global_STATUS = false;
let Global_ID;

Router.post("/poll-communicate-watch", async (req, res, next) => {
  if (Global_STATUS === false) {
    res.send("Not Ready!");
  } else {
    res.send(Global_ID);
  }
});

Router.post("/poll-communicate-application", async (req, res, next) => {
  let requestBody = req.body;
  if (requestBody) {
    Global_STATUS = true;
    Global_ID = requestBody;
  }
});

module.exports = Router;
