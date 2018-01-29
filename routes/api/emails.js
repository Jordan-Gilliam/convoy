const express = require("express");
const router = require("express").Router();
const sendGridController = require("../../controllers/sendGridController");

router.route("/emails")
  .get(sendGridController.findAll)
  .post(sendGridController.sendEmail);


module.exports = router;