// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();
const axios = require("axios");
const xml2js = require("xml-js");
const database = require("../../database/database");
const { isPointWithinRadius } = require("geolib");

class coordsConstructor {
  constructor(latitude, longitude) {
    this.latitude = parseFloat(latitude);
    this.longitude = parseFloat(longitude);
    this.count = 1;
  }
}

Router.post("/poll-earthquakes", async (req, res, next) => {
  let response = await axios.get("https://gdacs.org/xml/gdacs_cap.xml");
  let XMLJson = xml2js.xml2json(response.data, { compact: true });
  let RawEarthQuakeArray = JSON.parse(XMLJson);
  RawEarthQuakeArray = RawEarthQuakeArray.rss.channel.item;
  // Use filter instead of map to keep only elements that match the condition
  let CleansedRawEarthQuakeArray = RawEarthQuakeArray.filter((Element) => {
    return Element["cap:alert"]["cap:info"]["cap:event"]._text === "Earthquake";
  });

  CleansedRawEarthQuakeArray.forEach((Element) => {
    const newCoordinates = new coordsConstructor(
      Element["geo:Point"]["geo:lat"]._text,
      Element["geo:Point"]["geo:long"]._text,
    );
    database.manage("insert", "vicinityReport", newCoordinates);
  });
});

// Get Radiusd

Router.post("/get-earthquakes", async (req, res, next) => {
  let data = await database.manage("find", "vicinityReport");
  let users = await database.manage("find", "users");

  let context = data.map((element) => {
    // Use `some` to check if there is at least one user within the radius for the element
    let isUserWithinRadius = users.some((user) => {
      return isPointWithinRadius(
        {
          latitude: user.location.latitude,
          longitude: user.location.longitude,
        },
        { latitude: element.latitude, longitude: element.longitude },
        5000,
      );
    });

    if (isUserWithinRadius === true) {
      return element;
    }
  });

  const filteredArray = context.filter((element) => element !== undefined);
  filteredArray.forEach((Element) => {
    database.manage("update", "vicinityReport", Element, {
      $inc: { count: 1 },
    });
  });
});

module.exports = Router;
