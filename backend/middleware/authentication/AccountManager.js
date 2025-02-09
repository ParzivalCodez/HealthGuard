// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();
const database = require("../../database/database.js");
const randomString = require("randomstring");
const Authentication = require("./handlers/Authentication.js");
const axios = require("axios");

// Account Registration Handler
Router.post("/create-account", (req, res, next) => {
  let requestBody = req.body;
  Authentication.Register(requestBody);
});

// Account Login Handler (Website)
Router.post("/login-account/website", async (req, res, next) => {
  let requestBody = req.body;
  const CredentialsObject = {
    emailAddress: requestBody.emailAddress,
    password: requestBody.password,
  };
  let data = await database.manage("find", "users", CredentialsObject);
  res.send(data[0].UniqueToken.ProfileToken);
});

// Account Login Handler (Application)
Router.post("/login-account/application", async (req, res, next) => {
  let requestBody = req.body;
  let credentialsData = await Authentication.Login(requestBody);
  const CredentialsObject = {
    UniqueToken: credentialsData[0].UniqueToken.ProfileToken,
    FirstName: credentialsData[0].firstName,
  };
  res.send(CredentialsObject);
});

Router.get("/get-emergencies", async (req, res, next) => {
  let EarthQuakeArray = [];

  class EmergencyProfile {
    constructor(magnitude, time, updatedTime, place, latitude, longitude) {
      this.magnitude = magnitude;
      this.time = time;
      this.updatedTime = updatedTime;
      this.place = place;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }

  const params = {
    format: "geojson",
    starttime: "2024-03-27",
    minmagnitude: 4.5,
  };

  let data = await axios
    .get("https://earthquake.usgs.gov/fdsnws/event/1/query", {
      params,
    })
    .then((res) => res);

  let concept = data.data.features;
  concept.forEach((Element) => {
    // console.log(Element.properties.mag);
    const Profile = new EmergencyProfile(
      Element.properties.mag,
      Element.properties.time,
      Element.properties.updated,
      Element.properties.place,
      Element.geometry.coordinates[0],
      Element.geometry.coordinates[1],
    );
    EarthQuakeArray.push(Profile);
  });

  res.send(EarthQuakeArray);
});

Router.post("/update-location", async (req, res, next) => {
  let requestBody = req.body;

  console.log(requestBody);

  let data = database.manage(
    "update",
    "users",
    {
      "UniqueToken.ProfileToken": requestBody.token,
    },
    {
      $set: {
        "location.latitude": requestBody.Latitude,
        "location.longitude": requestBody.Longitude,
      },
    },
  );
  let ProfileCode = await database.manage("find", "users", {
    "UniqueToken.ProfileToken": requestBody.token,
  });

  let FamilyCode = ProfileCode[0].familyAssociation;
  let FamilyMembers = await database.manage("find", "families", {
    familyCode: FamilyCode,
  });
  // [0].familyMembers
  let familyMembersArray = FamilyMembers[0].familyMembers;
  let ElementObject = [];
  for (let members of familyMembersArray) {
    let data = await database.manage("find", "users", {
      "UniqueToken.ProfileToken": members,
    });
    ElementObject.push(data);
  }
  res.send(ElementObject);
});

module.exports = Router;
