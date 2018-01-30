const router = require("express").Router();
const apiRoutes = require("./api/emails");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;