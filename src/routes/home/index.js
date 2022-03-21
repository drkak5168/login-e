"use strict";

const express = require("express");
const Router = express.Router();

const ctrl = require("./home.ctrl");

Router.get("/", ctrl.hello);
Router.get("/login", ctrl.login);

module.exports = Router;
