// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();

// Create a WebSocket server

// External Routers Import
const AuthenticationRouter = require("./authentication/AccountManager.js");
const FamilyManagerRouter = require("./authentication/FamilyManager.js");
const BrideManagerRouter = require("./authentication/BridgeManager.js");
const DisastersRouter = require("./authentication/Disasters");

// USE Router
Router.use(AuthenticationRouter);
Router.use(FamilyManagerRouter);
Router.use(BrideManagerRouter);
Router.use(DisastersRouter);

module.exports = Router;
