"use strict";

const express = require("express");
const Router = express.Router();

const ctrl = require("./home.ctrl");

Router.get("/", ctrl.output.hello);
Router.get("/login", ctrl.output.login);
Router.post("/login", ctrl.process.login);

module.exports = Router;
