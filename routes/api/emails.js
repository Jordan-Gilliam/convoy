const router = require("express").Router();
const sendGridController = require("../../controllers/sendGridController");

// Matches with "/api/emails"
router.route("/")
  .get(sendGridController.findAll)
  .post(sendGridController.sendEmail);




module.exports = router;