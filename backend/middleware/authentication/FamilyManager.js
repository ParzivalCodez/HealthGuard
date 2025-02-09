// Dependencies & Packages Import
const express = require("express");
const database = require("../../database/database");
const Router = express.Router();
const randomString = require("randomstring");
const Family = require("./handlers/FamilyHandlers.js");
const { isPointWithinRadius } = require("geolib");

Router.post("/create-family", async (req, res, next) => {
  let requestBody = req.body;
  Family.create(requestBody);
});

Router.post("/join-family", async (req, res, next) => {
  let requestBody = req.body;
  await Family.join(requestBody);
});

Router.post("/hazard-create-emergency", async (req, res, next) => {
  let requestBody = req.body;
  // isPointWithinRadius(
  //   { latitude: 51.525, longitude: 7.4575 },
  //   { latitude: 51.5175, longitude: 7.4678 },
  //   5000,
  // );

  let data = await database.manage("find", "disasterReports");

  let context = data.map((Element) => {
    let checker = isPointWithinRadius(
      { latitude: Element.Latitude, longitude: Element.Longitude },
      { latitude: requestBody.Latitude, longitude: requestBody.Longitude },
      5000,
    );

    if (checker) {
      return Element;
    }
  });

  context.forEach((Element) => {
    database.manage("update", "disasterReports", Element, {
      $inc: { CountReport: 1 },
    });
  });
});

Router.get("/hazard-send-emergencies", async (req, res, next) => {
  let currentData = await database.manage("find", "disasterReports", {
    CountReport: { $gt: 5 },
  });
  // console.log(currentData);
  res.send(currentData);
});

module.exports = Router;
