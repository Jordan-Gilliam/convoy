const router = require("express").Router();
const sendGridController = require("../../controllers/sendGridController");

// Matches with "/api/books"
router.route("/api/emails")
  .get(sendGridController.findAll)
  .post(sendGridController.create);




module.exports = router;