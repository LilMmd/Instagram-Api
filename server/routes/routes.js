const express = require("express");
const router = express.Router();
const services = require("../services/services")

router.get("/" , services.homeroutes)
router.get("/red" , services.red)
    module.exports = router;